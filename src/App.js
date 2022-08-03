import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "cookies" },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((res) => {
        setImages(res.data.results);
      })
      .catch((err) => setError(true));
  }, []);

  if (images.length === 0) {
    return <div data-testid="loading">"Fetching Data"</div>;
  } else {
    {
      return images.map((image) => {
        return (
          <div data-testid="image" key={image.id}>
            <div>{image.description}</div>
            <img src={image.urls.thumb} alt={image.alt_description} />
          </div>
        );
      });
    }
  }
};

export default ImageList;
