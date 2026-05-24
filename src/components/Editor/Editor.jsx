import "./Editor.css";

function Editor({
    chapters,
    setChapters,
    activeChapterId
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

    if (!activeChapter) {

        return (
            <div className="editor-empty">
                Select or create a chapter to start writing
            </div>
        );

    }

    return (

        <div className="editor">

            <div className="editor-header">

                <h2>{activeChapter.title}</h2>

                <p className="word-count">
                    {wordCount} words
                </p>

            </div>

            <textarea
                value={activeChapter.content}
                onChange={handleChange}
                placeholder="Start writing..."
            />

        </div>

    );
}

export default Editor;