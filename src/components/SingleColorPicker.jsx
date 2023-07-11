export default function SingleColorPicker({ color, value, onChange }) {

    let bgColor = `rgb(${color == 'r' ? value : 0}, ${color == 'g' ? value : 0
        }, ${color == 'b' ? value : 0})`; // color: "r", value="255"

    // rgb(255,0, 0)


    return <div style={{
        display: "flex",
        placeItems: "center"
    }}>
        <div style={{
            width: 40,
            height: "40px",
            border: "2px solid black",
            backgroundColor: bgColor
        }}></div>
        <div>{color.toUpperCase()}: </div>
        <input type="number" min={0} max={255} value={value} onChange={onChange}></input>
    </div>
}