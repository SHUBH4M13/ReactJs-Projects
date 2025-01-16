import { useState, useEffect } from "react";

const API = `https://animechan.io/api/v1/quotes/random`;

const GetQuotes = () => {

    const [Quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchqoute = async () => {
            try {
                const res = await fetch(API);
                const newQuote = await res.json();
                setQuote(newQuote.content);
            } catch (error) {
                console.log(error)
            }
        };

        fetchqoute();
    }, [])

    return (
        <h1>{Quote || "loading"}</h1>
    )
}

export default GetQuotes;