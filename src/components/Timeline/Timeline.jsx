import { useState } from "react";

import "./Timeline.css";

function Timeline() {

    const [title, setTitle] = useState("");

    const [events, setEvents] = useState([]);

    const [position, setPosition] = useState(0);

    function addEvent() {

        if (title.trim() === "") return;

        const newEvent = {
            id: Date.now(),
            title
        };

        const updatedEvents = [...events];

        updatedEvents.splice(position, 0, newEvent);

        setEvents(updatedEvents);

        setTitle("");
    }

    return (
        <div className="timeline-page">

            <h1>Story Timeline</h1>

            {/* FORM */}

            <div className="timeline-form">

                <input
                    type="text"
                    placeholder="New event..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                >

                    <option value={0}>
                        Beginning
                    </option>

                    {events.map((event, index) => (

                        <option
                            key={event.id}
                            value={index + 1}
                        >
                            After {event.title}
                        </option>

                    ))}

                </select>
                <button onClick={addEvent}>
                    Add Event
                </button>

            </div>

            {/* VISUAL TIMELINE */}

            <div className="timeline-container">

                {events.map((event) => (

                    <div className="timeline-event" key={event.id}>

                        <div className="node"></div>

                        <p>{event.title}</p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Timeline;