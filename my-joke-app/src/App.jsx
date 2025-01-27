import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [joke, setJoke] = useState(null); 
  const [loading, setLoading] = useState(false); 

  
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(data); 
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <div className="joke-card">
        {loading ? (
          <p>Loading...</p>
        ) : joke ? (
          <div>
            <h2>Joke of the Day:</h2>
            <p><strong>Setup:</strong> {joke.setup}</p>
            <p><strong>Punchline:</strong> {joke.punchline}</p>
          </div>
        ) : (
          <p>No joke found!</p>
        )}
        <button onClick={fetchJoke} className="joke-button">
          Get Another Joke
        </button>
      </div>
    </div>
  );
}

export default App;
