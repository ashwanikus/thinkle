import React, { useState, useEffect } from "react";
import "./style.scss";

const OrderTable = ({ orders }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="order-container">
            {isMobile ? (
                <div className="order-card-container">
                    {orders.map((order, index) => (
                        <div key={index} className="order-card">
                            <div className="order-header">
                                <img src={order.image} alt={order.client} className="client-avatar" />
                                <span className="client-name">{order.client}</span>
                                <span className={`status ${order.status.toLowerCase().replace(" ", "-")}`}>
                                    {order.status}
                                </span>
                            </div>
                            <div className="order-info">
                                <p className="order-date">{order.date}</p>
                                <div className="order-details">
                                    <div>
                                        <p className="label">Date</p>
                                        <p>{order.date}</p>
                                    </div>
                                    <div>
                                        <p className="label">Order Status</p>
                                        <p>{order.status}</p>
                                    </div>
                                </div>
                                <div className="order-details">
                                    <div>
                                        <p className="label">Package Purchased</p>
                                        <p>{order.package}</p>
                                    </div>
                                    <div>
                                        <p className="label">Your Earnings</p>
                                        <p>₹{order.earnings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <table className="order-table">
                    <thead>
                    <tr>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Package Purchased</th>
                        <th>Your Earnings</th>
                        <th>Order Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td className="client-info">
                                <img src={order.image} alt={order.client} className="client-avatar" />
                                {order.client}
                            </td>
                            <td>{order.date}</td>
                            <td>{order.package}</td>
                            <td>₹{order.earnings}</td>
                            <td>
                                    <span className={`status ${order.status.toLowerCase().replace(" ", "-")}`}>
                                        {order.status}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderTable;
