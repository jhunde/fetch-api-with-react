import { useState, useEffect } from "react";


function Joke(){
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await fetch("/api/getJokes");
                if (!response.ok){
                    throw new Error("Failed to fetch joke");
                }
                const data = await response.json();
                setJoke(data);
            }
            catch{
                console.log("Error: ", console.error);
            }
        };
        fetchJoke();
    }, []);

    return (
        <div>
            <h1>Random Joke</h1>
            {joke ? <p> {joke.setup ? `${joke.setup} - ${joke.delivery}` : joke.joke}</p> :<p>loading...</p>}

            {/* {joke ? <p> {joke.setup ? `${joke.setup} - ${joke.delivery}` : joke.joke}</p> : <p>Loading...</p>} */}
    
        </div>
    );
}
export default Joke