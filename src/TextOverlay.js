import React  from 'react';
import Draggable from 'react-draggable';
import {Resizable} from 'react-resizable';

function TextOverlay({ textData, onTextChange }) {

    return (
        <Draggable handle=".handle"  >
            <Resizable
                width={200}
                height={100}
                minWidth={100}
                minHeight={50}
                onResizeStop={(e, direction, ref, d) => {
                    
                }}
            >
                <div className="text-overlay">
                    <div className="handle" style={{
                        color: 'transparent',  
                    }} > <div><textarea 
                            value={textData.text}
                            onChange={(e) => {
                                onTextChange(e.target.value)
                            }}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: '40px',
                                fontWeight: 'bold',
                                color: 'white',
                                width: 'auto',
                                height: 'auto',
                                minHeight: '50px',
                                overflow:'hidden',
                            }}

                        /> </div></div>
                   
                </div>
            </Resizable>
        </Draggable>
    );
}

export default TextOverlay;
