import './style.scss';
import {FaArrowUp} from "react-icons/fa";

const style = {transform: 'rotate(45deg)' };

const EarningsCard = ({ title, description, amount, change, isIncrease }) => {
    return (
        <div className="earnings-card">
            <div className="earnings-card__header">
                <h3 className="title">{title}</h3>
                {description && <p className="description">{description}</p>}
            </div>
            <div className="earnings-card__footer">
                <h2 className="amount">₹{amount}</h2>
                <div className="change">
                    vs last month{" "}
                    {change !== "0" && (
                        <span className={isIncrease ? "increase" : "decrease"}>{change}% <FaArrowUp style={style}/>
                    </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EarningsCard;
