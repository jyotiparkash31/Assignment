
function ImageDisplay({ imageUrl }) {
    return (
        <div className="image-display">
            <div className="image-container">
                <img src={imageUrl} alt="Fetched" />
            </div> 
        </div>
    );
}

export default ImageDisplay;
