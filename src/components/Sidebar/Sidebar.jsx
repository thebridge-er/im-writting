import "./Sidebar.css";

function Sidebar({
    sidebarOpen,
    setView,
    setOutlineOpen,
    setUser
}) {

    function openChapters() {
        setView("editor");
        setOutlineOpen(true);
    }

    function logout() {
        localStorage.removeItem("loggedUser");
        setUser(null);
    }

    return (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

            <h1>I'm Writting!</h1>

            <button onClick={openChapters}>
                Chapters
            </button>

            <button onClick={() => setView("timeline")}>
                Timeline
            </button>

            <button onClick={() => setView("characters")}>
                Characters
            </button>

            <button className="logout-button" onClick={logout}>
                Log out
            </button>

        </div>
    );
}

export default Sidebar;