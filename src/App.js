import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';
import TextInput from './TextInput';
import TextOverlay from './TextOverlay';

// const API_URL="https://api.usplash.com/search/photos"

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [textOverlays, setTextOverlays] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Fetch image from an open API (e.g., Unsplash)
    axios
      .get('https://source.unsplash.com/random')
      .then((response) => {
        setImageUrl(response.request.responseURL);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  const addTextOverlay = (text) => {
    setTextOverlays((prevOverlays) => [
      ...prevOverlays,
      {
        id: counter,
        text,
        position: { x: 50, y: 50 },
      },
    ]);
    setCounter(counter + 1);
  };

  const updateTextOverlay = (id, newText) => {
    setTextOverlays((prevOverlays) =>
      prevOverlays.map((overlay) =>
        overlay.id === id ? { ...overlay, text: newText } : overlay
      )
    );
  };

  return (
    <div className="App">
      <ImageDisplay imageUrl={imageUrl} />
      <TextInput onAddText={addTextOverlay} />
      {textOverlays.map((overlay) => (
        <TextOverlay
          key={overlay.id}
          textData={overlay}
          onTextChange={(newText) => updateTextOverlay(overlay.id, newText)}
        />
      ))}
    </div>
  );
}

export default App;
