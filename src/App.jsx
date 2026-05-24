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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notesOpen, setNotesOpen] = useState(false);

  const [outlineOpen, setOutlineOpen] = useState(false);

  const [view, setView] = useState("editor");

  const [chapters, setChapters] = useState([]);

  const [activeChapterId, setActiveChapterId] = useState(null);

  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("loggedUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });

  if (!user) {

    return <Auth setUser={setUser} />;

  }

  return (

    <div className="app">

      <button
        className="menu-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <button
        className="notes-button"
        onClick={() => setNotesOpen(!notesOpen)}
      >
        Take a note!
      </button>

      <Sidebar
        sidebarOpen={sidebarOpen}
        setView={setView}
        setOutlineOpen={setOutlineOpen}
        setUser={setUser}
      />

      {outlineOpen && (

        <Outline
          chapters={chapters}
          setChapters={setChapters}
          activeChapterId={activeChapterId}
          setActiveChapterId={setActiveChapterId}
          setOutlineOpen={setOutlineOpen}
        />

      )}

      {view === "editor" && (

        <div className="editor-layout">

          <Editor
            chapters={chapters}
            setChapters={setChapters}
            activeChapterId={activeChapterId}
            setOutlineOpen={setOutlineOpen}
          />

        </div>

      )}

      {view === "timeline" && <Timeline />}

      {view === "characters" && <Characters />}

      <Notes notesOpen={notesOpen} />

    </div>

  );
}

export default App;