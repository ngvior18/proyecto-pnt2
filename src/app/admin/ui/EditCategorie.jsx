"use client"
import React, { useState } from "react";

export default function EditCategorie() {

    const [inputValueEditCategoria, setInputValueEditCategoria] = useState("");  // Para el input de obtener categoría
    const [inputValueNombreEditCategoria, setInputValueNombreEditCategoria] = useState("");  // Para el input de obtener categoría

    const handleEditCategoria = () => {
        fetch(`http://localhost:3000/api/categorias/editCategoria`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: inputValueEditCategoria, nombre: inputValueNombreEditCategoria }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert(formatJSON(data));  // Mostrar la respuesta en una alerta
            setInputValueEditCategoria("")
            setInputValueNombreEditCategoria("")
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
        });
};

const formatJSON = (data) => {
    return JSON.stringify(data, null, 2);
};

    const handleChangeEditCategoria = (event) => {
        setInputValueEditCategoria(event.target.value);
    };

    const handleChangeNombreEditCategoria = (event) => {
        setInputValueNombreEditCategoria(event.target.value);
    };

    return (
        <>
            <div className="editCategoria actionCrud">
                <input
                    className="inputCRUD editInputCRUD"
                    placeholder="Ingrese el ID, de la categoría..."
                    value={inputValueEditCategoria}
                    onChange={handleChangeEditCategoria}
                />
                <input
                    className="inputCRUD editInputCRUD"
                    placeholder="Ingrese el nombre, de la categoría..."
                    value={inputValueNombreEditCategoria}
                    onChange={handleChangeNombreEditCategoria}
                />
                <div className="titleCrud">
                    <button className="buttonCrud" onClick={handleEditCategoria}>Editar categoría</button>
                </div>
            </div>
        </>
    )

}