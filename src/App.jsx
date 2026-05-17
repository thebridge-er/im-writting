import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import Notes from "./components/Notes/Notes";
import Timeline from "./components/Timeline/Timeline";
import Characters from "./components/Characters/Characters";
import Outline from "./components/Outline/Outline";

import "./App.css";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [notesOpen, setNotesOpen] = useState(false);

  const [view, setView] = useState("editor");

  const [chapters, setChapters] = useState([]);

  const [activeChapterId, setActiveChapterId] = useState(null);

  const [outlineOpen, setOutlineOpen] = useState(false);

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

      <Sidebar
        sidebarOpen={sidebarOpen}
        setView={setView}
        setOutlineOpen={setOutlineOpen}
      />

      {/* VIEWS */}

      {view === "editor" && (

        <div className="editor-layout">

          {outlineOpen && (

            <Outline
              chapters={chapters}
              setChapters={setChapters}
              activeChapterId={activeChapterId}
              setActiveChapterId={setActiveChapterId}
              setOutlineOpen={setOutlineOpen}
            />

          )}

          <Editor
            chapters={chapters}
            setChapters={setChapters}
            activeChapterId={activeChapterId}
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