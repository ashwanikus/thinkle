import './style.scss';
import {useSidebar} from "../../hooks/useSidebar.jsx";
import EarningsCard from "../../components/common/EarningCard/index.jsx";
import OrderTable from "../../components/common/Order/index.jsx";
import User from "../../assets/images/dd1.png";

const orders = [
    {
        client: "Dipankar Datta",
        date: "Feb 16, 2025",
        package: "1 session",
        earnings: "1234",
        status: "Completed",
        image: User // Replace with actual image
    },
    {
        client: "Divyanshu Gupta",
        date: "Feb 16, 2025",
        package: "1 session",
        earnings: "1234",
        status: "In-progress",
        image: User
    },
    {
        client: "Dipankar Datta",
        date: "Feb 16, 2025",
        package: "1 session",
        earnings: "1234",
        status: "Completed",
        image: User
    }
];

const Dashboard = () => {
    const {isOpen} = useSidebar();

    return (
        <>
            <div className={isOpen?"main-content":"main"}>
                <div className="content__wrapper">
                    <div className="content-header">
                        <h2 className="content-header__title">Earning</h2>
                        <span className="content-header__subtitle">Track your payments here</span>
                    </div>
                    <div className="earnings-dashboard">
                        {/* Lifetime Earnings */}
                        <EarningsCard title="Lifetime Earnings" description="" amount="1267" change="28.4" isIncrease={true} />

                        {/* Pending Payments */}
                        <EarningsCard title="Pending Payments" description="This will be paid to you on 30/03/2025" amount="1200" change="28.4" isIncrease={true} />

                        {/* Earning this month */}
                        <EarningsCard title="Earning this month" description="Earn this amount as you complete coaching" amount="2390" change="28.4" isIncrease={false} />
                    </div>
                    <div className="order-table">
                        <OrderTable orders={orders} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
