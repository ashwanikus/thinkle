import {useSidebar} from "../../hooks/useSidebar.jsx";

const Assessment = () => {
    const {isOpen} = useSidebar();

    return (
        <>
            <div className={isOpen?"main-content":"main"}>
                <h1>Admin Assessment</h1>
            </div>
        </>
    );
};

export default Assessment;
