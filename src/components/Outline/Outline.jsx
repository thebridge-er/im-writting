import { useState } from "react";

import "./Outline.css";

function Outline({
    chapters,
    setChapters,
    activeChapterId,
    setActiveChapterId,
    setOutlineOpen
}) {

    const [title, setTitle] = useState("");

    function addChapter() {

        if (title.trim() === "") return;

        const newChapter = {
            id: Date.now(),
            title,
            content: ""
        };

        setChapters([...chapters, newChapter]);

        setActiveChapterId(newChapter.id);
        setOutlineOpen(false);

        setTitle("");
    }

    return (

        <div className="outline">

            <h2>Chapters</h2>

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
                        key={chapter.id}
                        className={`chapter-item ${activeChapterId === chapter.id ? "active" : ""
                            }`}
                        onClick={() => {

                            setActiveChapterId(chapter.id);

                            setOutlineOpen(false);

                        }}
                    >

                        {chapter.title}

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Outline;