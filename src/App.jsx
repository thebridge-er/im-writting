import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import Notes from "./components/Notes/Notes";
import Timeline from "./components/Timeline/Timeline";
import Characters from "./components/Characters/Characters";
import Outline from "./components/Outline/Outline";
import Auth from "./components/Auth/Auth";

import "./App.css";

function App() {

  // SIDEBARS
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notesOpen, setNotesOpen] = useState(false);

  const [outlineOpen, setOutlineOpen] = useState(false);

  // VIEW
  const [view, setView] = useState("editor");

  // CHAPTERS
  const [chapters, setChapters] = useState([]);

  // ACTIVE CHAPTER
  const [activeChapterId, setActiveChapterId] = useState(null);

  // USER
  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("loggedUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });

  // LOGIN SCREEN
  if (!user) {

    return <Auth setUser={setUser} />;

  }

  return (

    <div className="app">

      {/* MENU BUTTON */}
      <button
        className="menu-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* NOTES BUTTON */}
      <button
        className="notes-button"
        onClick={() => setNotesOpen(!notesOpen)}
      >
        📝
      </button>

      {/* LEFT SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setView={setView}
        setOutlineOpen={setOutlineOpen}
      />

      {/* CHAPTERS SIDEBAR */}
      {outlineOpen && (

        <Outline
          chapters={chapters}
          setChapters={setChapters}
          activeChapterId={activeChapterId}
          setActiveChapterId={setActiveChapterId}
          setOutlineOpen={setOutlineOpen}
        />

      )}

      {/* EDITOR */}
      {view === "editor" && (

        <div className="editor-layout">

          <Editor
            chapters={chapters}
            setChapters={setChapters}
            activeChapterId={activeChapterId}
          />

        </div>

      )}

      {/* TIMELINE */}
      {view === "timeline" && <Timeline />}

      {/* CHARACTERS */}
      {view === "characters" && <Characters />}

      {/* NOTES */}
      <Notes notesOpen={notesOpen} />

    </div>

  );
}

export default App;