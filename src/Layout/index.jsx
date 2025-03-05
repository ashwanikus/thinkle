import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar/index.jsx"; // Ensure Sidebar is correctly imported

const Layout = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="content">
                <Outlet /> {/* This renders different pages dynamically */}
            </div>
        </div>
    );
};

export default Layout;
