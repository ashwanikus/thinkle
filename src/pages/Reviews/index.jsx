import {useSidebar} from "../../hooks/useSidebar.jsx";

const Reviews = () => {
    const {isOpen} = useSidebar();

    return (
        <>
            <div className={isOpen?"main-content":""}>
                <div className="content__wrapper"></div>
            </div>
        </>
    );
};

export default Reviews;
