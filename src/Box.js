import React from "react";

const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    // remove box compoent 
    const handleRemove = () => removeBox(id);

    return (
        <div
            className="Box"
            style={{
                backgroundColor : backgroundColor,
                width : `${width}px`,
                height : `${height}px`,
                position : "absolute"
            }}
        >
            <button onClick={handleRemove} style={{margin : '0% 0% 0% 100%' }}>X</button>
        </div>
    )
}

export default Box;