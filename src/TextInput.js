import React, { useState } from 'react';

function TextInput({ onTextChange, onAddText }) {
    const [text, setText] = useState('');

    const handleAddText = () => {
        if (text.trim() !== '') {
            onAddText(text);
            setText('');
        }
    };

    return (
        <div className="text-input">
            <input
                type="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddText}>Add Text</button>
        </div>
    );
}

export default TextInput;
