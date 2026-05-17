import { useState } from "react";

import "./Characters.css";

function Characters() {

    const [characters, setCharacters] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [expandedId, setExpandedId] = useState(null);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");
    const [goal, setGoal] = useState("");

    function addCharacter() {

        if (name.trim() === "") return;

        const newCharacter = {
            id: Date.now(),
            name,
            age,
            role,
            goal
        };

        setCharacters([...characters, newCharacter]);

        setName("");
        setAge("");
        setRole("");
        setGoal("");

        setShowForm(false);
    }

    function deleteCharacter(id) {

        const updatedCharacters =
            characters.filter((character) => character.id !== id);

        setCharacters(updatedCharacters);
    }

    function toggleExpand(id) {

        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    }

    return (

        <div className="characters-page">

            <h1>Characters</h1>

            {/* NEW CHARACTER BUTTON */}

            <button
                className="new-character-button"
                onClick={() => setShowForm(!showForm)}
            >
                + New Character
            </button>

            {/* FORM */}

            {showForm && (

                <div className="character-form">

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />

                    <textarea
                        placeholder="Goal / Description"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />

                    <button onClick={addCharacter}>
                        Save Character
                    </button>

                </div>
            )}

            {/* CHARACTER LIST */}

            <div className="characters-list">

                {characters.map((character) => (

                    <div
                        className="character-card"
                        key={character.id}
                    >

                        {/* CARD HEADER */}

                        <div
                            className="character-header"
                            onClick={() => toggleExpand(character.id)}
                        >

                            <h2>{character.name}</h2>

                            <button
                                className="delete-button"
                                onClick={() => deleteCharacter(character.id)}
                            >
                                X
                            </button>

                        </div>

                        {/* EXPANDED */}

                        {expandedId === character.id && (

                            <div className="character-details">

                                <p>
                                    <strong>Age:</strong> {character.age}
                                </p>

                                <p>
                                    <strong>Role:</strong> {character.role}
                                </p>

                                <p>
                                    <strong>Goal:</strong> {character.goal}
                                </p>

                            </div>

                        )}

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Characters;