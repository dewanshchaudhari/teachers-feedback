
import { useState } from 'react';
function Slider({ header }) {
    const [value, setValue] = useState(0);
    let showInput = (e) => {
        setValue(e.target.value);
    };
    return (
        <div>
            <legend>{header} {value}</legend>
            <label for="customRange1">Range:1-10</label>
            <input type="range" className="custom-range" id="customRange1" min='1' max='10' step='1' defaultValue={value} onChange={showInput} required></input>
        </div >
    )
}

export default Slider
