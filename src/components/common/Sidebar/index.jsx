import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Use useLocation for URL tracking
import { useSidebar } from "../../../hooks/useSidebar";
import {
    FaHome, FaComment, FaChartBar, FaHeart, FaCalendar, FaWallet,
    FaUser, FaTools, FaShieldAlt, FaQuestionCircle, FaSignOutAlt,
    FaChevronDown, FaBars
} from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import "./style.scss";

const IconStyle = { fontSize: "20px" };

const navItems = [
    {
        id: "coach",
        title: "Thinkle Coach",
        icon: <FaUser style={IconStyle} />,
        subItems: [
            { title: "Dashboard", icon: <FaHome style={IconStyle} />, link: "/dashboard" },
            { title: "Messages", icon: <FaComment style={IconStyle} />, link: "/messages" },
            { title: "Assessment", icon: <FaChartBar style={IconStyle} />, link: "/assessment" },
            { title: "Reviews", icon: <FaHeart style={IconStyle} />, link: "/reviews" },
            { title: "Calendar", icon: <FaCalendar style={IconStyle} />, link: "/calendar" },
            { title: "Earnings", icon: <FaWallet style={IconStyle} />, link: "/earnings", highlight: true },
            { title: "Profile", icon: <FaUser style={IconStyle} />, link: "/profile" }
        ]
    },
    {
        id: "creator",
        title: "Thinkle Creator",
        icon: <FaTools style={IconStyle} />,
        subItems: [{ title: "Creator Dashboard", icon: <FaChartBar style={IconStyle} />, link: "/creator-dashboard" }]
    },
    {
        id: "admin",
        title: "Admin",
        icon: <FaShieldAlt />,
        subItems: [{ title: "Admin Panel", icon: <FaUser style={IconStyle} />, link: "/admin-panel" }]
    }
];

const Sidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();
    const location = useLocation(); // Get the current URL path

    // Find the active main menu and sub-menu based on the URL
    const findActiveMenu = () => {
        for (let section of navItems) {
            for (let item of section.subItems) {
                if (location.pathname.startsWith(item.link)) {
                    return { activeSection: section.id, activeSubmenu: item.link };
                }
            }
        }
        // Default selection (Dashboard)
        return { activeSection: "coach", activeSubmenu: "/dashboard" };
    };

    const [activeState, setActiveState] = useState(findActiveMenu());

    useEffect(() => {
        setActiveState(findActiveMenu()); // Update active state on URL change
    }, [location.pathname]);

    const toggleSection = (section) => {
        setActiveState((prev) => ({
            ...prev,
            activeSection: prev.activeSection === section ? null : section
        }));
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="sidebar-logo" />
                <button className="toggle-btn inside" onClick={toggleSidebar}>
                    <FaBars style={IconStyle} />
                </button>
            </div>

            <div className="menu">
                {navItems.map(({ id, icon,title,  subItems }) => (
                    <div className="menu-section" key={id}>
                        <button
                            className={`menu-header ${activeState.activeSection === id ? "active" : ""}`}
                            onClick={() => toggleSection(id)}
                        >
                            <span className="menu-header__title">
                                {icon}
                                <span className="menu-header__text">{title}</span>
                            </span>
                            <span>
                                <FaChevronDown className={activeState.activeSection === id ? "rotate" : ""} />
                            </span>
                        </button>
                        {activeState.activeSection === id && isOpen && (
                            <ul>
                                {subItems.map(({ title, icon, link, highlight }) => (
                                    <li key={title}>
                                        <NavLink
                                            to={link}
                                            className={activeState.activeSubmenu === link ? "active highlight" : ""}
                                        >
                                            {icon} {title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="bottom-menu">
                    <NavLink to="/support"><FaQuestionCircle /> Contact Support</NavLink>
                    <NavLink to="/logout"><FaSignOutAlt /> Logout</NavLink>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
