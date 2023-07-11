import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

export default function RGBColorPicker() {

    const [rValue, setrValue] = useState(255);
    const [gValue, setgValue] = useState(0);
    const [bValue, setbValue] = useState(0);

    return <>

        <SingleColorPicker
            color="r"
            value={rValue}
            onChange={(e) => { setrValue(e.target.value) }}
        />

        <SingleColorPicker
            color="g"
            value={gValue}
            onChange={(e) => { setgValue(e.target.value) }}
        />

        <SingleColorPicker
            color="b"
            value={bValue}
            onChange={(e) => { setbValue(e.target.value) }}
        />


        <div style={{
            width: 100,
            height: "100px",
            border: "2px solid black",
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`
        }}>
            RGB({rValue}, {gValue}, {bValue})
        </div>
    </>




}