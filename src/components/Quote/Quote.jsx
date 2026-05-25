import { useState } from "react";

import "./Quote.css";

function Quote() {

    const [quote, setQuote] = useState("");

    const [author, setAuthor] = useState("");

    async function getQuote() {

        try {

            const response = await fetch(
                "http://localhost:5000/api/quote"
            );

            const data = await response.json();

            setQuote(data.q);

            setAuthor(data.a);

        } catch (error) {

            console.log(error);

        }
    }

    return (

        <div className="quote-box">

            <button
                className="quote-button"
                onClick={getQuote}
            >
                Writer Inspiration
            </button>

            {quote && (

                <div className="quote-content">

                    <p className="quote-text">
                        "{quote}"
                    </p>

                    <p className="quote-author">
                        — {author}
                    </p>

                </div>

            )}

        </div>

    );
}

export default Quote;