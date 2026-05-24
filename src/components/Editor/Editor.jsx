import "./Editor.css";

function Editor({
    chapters,
    setChapters,
    activeChapterId,
    setOutlineOpen
}) {

    const activeChapter = chapters.find(
        (ch) => ch._id === activeChapterId
    );

    // WORD COUNT
    const wordCount = activeChapter?.content
        ? activeChapter.content
            .trim()
            .split(/\s+/)
            .filter(word => word !== "").length
        : 0;

    function handleChange(e) {

        const updatedChapters = chapters.map((chapter) => {

            if (chapter._id === activeChapterId) {

                return {
                    ...chapter,
                    content: e.target.value
                };

            }

            return chapter;

        });

        setChapters(updatedChapters);

    }

    // EMPTY STATE
    if (!activeChapter) {

        return (

            <div className="editor-empty">

                <h2>
                    Create a chapter to start writing
                </h2>

                <button
                    className="create-chapter-button"
                    onClick={() => setOutlineOpen(true)}
                >
                    Create Chapter
                </button>

            </div>

        );

    }

    return (

        <div className="editor">

            <div className="editor-header">

                <h2>{activeChapter.title}</h2>

            </div>

            <textarea
                value={activeChapter.content}
                onChange={handleChange}
                placeholder="Start writing..."
            />

            <div className="word-count">
                {wordCount} words
            </div>

        </div>

    );
}

export default Editor;