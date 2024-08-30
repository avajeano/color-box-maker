import React, { useState } from "react";

const NewBoxForm =  ({addBox}) => {
    // starting the form with empty inputs 
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            // turning the width and height into integers 
            [name]: name === "width" || name === "height" ? parseInt(value) : value
        }));
    };

    // submitting the form and resetting the inputs 
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="background color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input 
                id="width"
                type="number"
                name='width'
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input 
                id="height"
                type="number"
                name="height"
                placeholder='height'
                value={formData.height}
                onChange={handleChange}            
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;