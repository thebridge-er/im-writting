import { useState, useEffect } from "react";

import "./Outline.css";

function Outline({
    chapters,
    setChapters,
    activeChapterId,
    setActiveChapterId,
    setOutlineOpen
}) {

    const [title, setTitle] = useState("");

    // LOAD CHAPTERS FROM BACKEND
    useEffect(() => {

        fetch("http://localhost:5000/api/chapters")
            .then((res) => res.json())
            .then((data) => {

                console.log("CHAPTERS:", data);

                if (Array.isArray(data)) {

                    setChapters(data);

                } else {

                    setChapters([]);

                }

            })
            .catch((err) => {

                console.log("Error loading chapters:", err);

            });

    }, []);

    // ADD CHAPTER
    function addChapter() {

        if (title.trim() === "") return;

        const newChapter = {

            title: title.trim(),

            content: ""

        };

        console.log("SENDING:", newChapter);

        fetch("http://localhost:5000/api/chapters", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newChapter)

        })
            .then((res) => res.json())
            .then((createdChapter) => {

                console.log("CREATED:", createdChapter);

                setChapters((prev) => [

                    ...prev,
                    createdChapter

                ]);

                setActiveChapterId(createdChapter._id);

                setTitle("");

            })
            .catch((err) => {

                console.log("Error creating chapter:", err);

            });
    }
    // DELETE CHAPTER
    function deleteChapter(id) {

        fetch(`http://localhost:5000/api/chapters/${id}`, {

            method: "DELETE"

        })
            .then(() => {

                setChapters((prev) =>
                    prev.filter((chapter) => chapter._id !== id)
                );

                if (activeChapterId === id) {

                    setActiveChapterId(null);

                }

            })
            .catch((err) => {

                console.log("Error deleting chapter:", err);

            });
    }

    return (

        <div className="outline">

            {/* HEADER */}
            <div className="outline-header">

                <h2>Chapters</h2>

                <button
                    className="close-outline"
                    onClick={() => setOutlineOpen(false)}
                >
                    ←
                </button>

            </div>

            {/* CREATE CHAPTER */}
            <div className="outline-form">

                <input
                    type="text"
                    placeholder="New chapter..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button onClick={addChapter}>
                    Add
                </button>

            </div>

            {/* CHAPTER LIST */}
            <div className="chapters-list">

                {Array.isArray(chapters) &&
                    chapters.map((chapter) => (

                        <div
                            key={chapter._id}
                            className={`chapter-item ${activeChapterId === chapter._id
                                ? "active"
                                : ""
                                }`}
                            onClick={() => {

                                setActiveChapterId(chapter._id);

                            }}
                        >

                            <span>
                                {chapter.title}
                            </span>

                            <button
                                className="delete-chapter"
                                onClick={(e) => {

                                    e.stopPropagation();

                                    deleteChapter(chapter._id);

                                }}
                            >
                                ✕
                            </button>

                        </div>

                    ))}

            </div>

        </div>

    );
}

export default Outline;