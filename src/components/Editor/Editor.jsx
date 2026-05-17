import "./Editor.css";

function Editor({
    chapters,
    setChapters,
    activeChapterId
}) {

    const activeChapter =
        chapters.find(
            (chapter) => chapter.id === activeChapterId
        );

    function updateContent(e) {

        const updatedChapters =
            chapters.map((chapter) => {

                if (chapter.id === activeChapterId) {

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
            <div className="editor">
                <h2>Select or create a chapter</h2>
            </div>
        );
    }

    return (

        <div className="editor">

            <h1>{activeChapter.title}</h1>

            <textarea
                value={activeChapter.content}
                onChange={updateContent}
                placeholder="Start writing..."
            />

        </div>
    );
}

export default Editor;