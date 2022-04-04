import { React, useState } from 'react'
import TextField from "@mui/material/TextField";
import "../style/search.css";
import { Boton } from "../components/Boton";
import List from "../components/List"

export default function Search() {
    return (
        <Header />
    );
};

function Header() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return <header className="search-page">
        <h1>Búsqueda de leis</h1>
        <div className="search">
            <TextField id="outlined-basic" onChange={inputHandler} variant="outlined" fullWidth label="Search" />
        </div>
        <List input={inputText} />
        <div className="botones_principales">
            <Boton color="azul" texto="Importar norma" />
            <Boton color="gris" texto="Previsualizar" />
        </div>
    </header>
}