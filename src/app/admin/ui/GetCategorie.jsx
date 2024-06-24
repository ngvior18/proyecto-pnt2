"use client"
import React, { useState } from "react";

export default function GetCategorie() {

    const [inputValueGetCategoria, setInputValueGetCategoria] = useState("");  // Para el input de obtener categoría

    const handleGetCategoria = () => {
        fetch(`http://localhost:3000/api/categorias/getCategorias/${inputValueGetCategoria}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert(formatJSON(data));
            setInputValueGetCategoria("")
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
        });
};

const formatJSON = (data) => {
    return JSON.stringify(data, null, 2);
};

    const handleChangeGetCategoria = (event) => {
        setInputValueGetCategoria(event.target.value);
    };

    return (
        <>
            <div className="getCategoria actionCrud">
                <input
                    className="inputCRUD"
                    placeholder="Ingrese el ID de la categoría..."
                    value={inputValueGetCategoria}
                    onChange={handleChangeGetCategoria}
                />

                <div className="titleCrud">
                    <button className="buttonCrud" onClick={handleGetCategoria}>Obtener categoría</button>
                </div>
            </div>
        </>
    )

}