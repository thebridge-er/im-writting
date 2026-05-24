import { useState, useEffect } from "react";
import "./Notes.css";

function Notes({ notesOpen }) {
    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        const savedNotes =

            JSON.parse(localStorage.getItem("notes"));

        if (savedNotes) {

            setNotes(savedNotes);
        }

    }, []);

    useEffect(() => {

        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );

    }, [notes]);

    function handleAddNote() {
        if (title.trim() === "" || content.trim() === "") return;

        const newNote = {
            id: Date.now(),
            title,
            content,
            expanded: false
        };

        setNotes([...notes, newNote]);

        setTitle("");
        setContent("");
        setShowForm(false);
    }

    function toggleNote(id) {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? { ...note, expanded: !note.expanded }
                    : note
            )
        );
    }

    function deleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <div className={`notes-sidebar ${notesOpen ? "open" : ""}`}>
            <h2>Notes</h2>

            {/* BUTTON NEW NOTE */}
            <button onClick={() => setShowForm(!showForm)}>
                New Note
            </button>

            {/* FORM */}
            {showForm && (
                <div className="new-note">
                    <input
                        type="text"
                        placeholder="Note title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Write your note..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button onClick={handleAddNote}>
                        Save Note
                    </button>
                </div>
            )}

            {/* NOTES LIST */}
            <div className="notes-list">
                {notes.map((note) => (
                    <div className="note-card" key={note.id}>

                        {/* HEADER */}
                        <div className="note-header">
                            <h3 onClick={() => toggleNote(note.id)}>
                                {note.title}
                            </h3>

                            <button onClick={() => deleteNote(note.id)}>
                                ❌
                            </button>
                        </div>

                        {/* CONTENT */}
                        {note.expanded && (
                            <p className="note-content">
                                {note.content}
                            </p>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;