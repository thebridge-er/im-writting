import "./Sidebar.css";

function Sidebar({
    sidebarOpen,
    setView,
    setOutlineOpen
}) {

    return (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

            <h1>I'm Writting!</h1>

            <button onClick={() => setOutlineOpen(true)}>
                Chapters
            </button>

            <button onClick={() => setView("editor")}>
                Editor
            </button>

            <button onClick={() => setView("timeline")}>
                Timeline
            </button>

            <button onClick={() => setView("characters")}>
                Characters
            </button>



        </div>
    );
}

export default Sidebar;