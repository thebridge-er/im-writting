import { useState, useEffect } from "react";

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

  const [view, setView] = useState("editor");

  const [chapters, setChapters] = useState([]);

  useEffect(() => {

    const savedChapters =

      JSON.parse(localStorage.getItem("chapters"));

    if (savedChapters) {

      setChapters(savedChapters);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "chapters",
      JSON.stringify(chapters)
    );

  }, [chapters]);

  const [activeChapterId, setActiveChapterId] = useState(null);

  useEffect(() => {

    const savedActiveChapter =

      JSON.parse(
        localStorage.getItem("activeChapterId")
      );

    if (savedActiveChapter) {

      setActiveChapterId(savedActiveChapter);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "activeChapterId",
      JSON.stringify(activeChapterId)
    );

  }, [activeChapterId]);

  const [outlineOpen, setOutlineOpen] = useState(false);

  const [user, setUser] = useState(

    JSON.parse(localStorage.getItem("loggedUser"))

  );

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