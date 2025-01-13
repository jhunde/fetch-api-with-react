import React, { useState } from "react";

function RandomPhoto() {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomPhoto = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPhoto(data);
    } catch (error) {
      console.log("Error fetching the photo:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Random Photo</h1>
      <button onClick={fetchRandomPhoto} disabled={loading}>
        {loading ? "Loading..." : "Get Random Photo"}
      </button>

      {photo && (
        <div>
          <img src={photo.urls.small} alt={photo.alt_description} />
          <p>Photo by {photo.user.name}</p>
        </div>
      )}
    </>
  );
}

export default RandomPhoto;
  