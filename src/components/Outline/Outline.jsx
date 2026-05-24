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

    // LOAD CHAPTERS
    useEffect(() => {

        fetch("http://localhost:5000/api/chapters")
            .then((res) => res.json())
            .then((data) => {

                setChapters(data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    // ADD CHAPTER
    function addChapter() {

        if (title.trim() === "") return;

        fetch("http://localhost:5000/api/chapters", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title.trim(),
                content: ""
            })

        })
            .then((res) => res.json())
            .then((newChapter) => {

                setChapters((prev) => [

                    ...prev,
                    newChapter

                ]);

                setActiveChapterId(newChapter._id);

                setTitle("");

            })
            .catch((err) => {

                console.log(err);

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

                console.log(err);

            });
    }

    return (

        <div className="outline">

            <div className="outline-header">

                <h2>Chapters</h2>

                <button
                    className="close-outline"
                    onClick={() => setOutlineOpen(false)}
                >
                    ←
                </button>

            </div>

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

            <div className="chapters-list">

                {chapters.map((chapter) => (

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

                        <span>{chapter.title}</span>

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