import { useState } from "react";


export function ClickablePicture({ img, imgClicked }) {

    const [clicked, setClicked] = useState(false);

    let urlImage = clicked ? img : imgClicked;

    return <img onClick={() => setClicked(!clicked)} src={urlImage}></img>

}