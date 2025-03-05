import {useSidebar} from "../../hooks/useSidebar.jsx";

const Message = () => {
    const {isOpen} = useSidebar();

    return (
        <>
            <div className={isOpen?"main-content":"main"}>
                <h1>Admin Message</h1>
            </div>
        </>
    );
};

export default Message;
