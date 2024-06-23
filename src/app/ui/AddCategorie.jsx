"use client"
import React, { useState } from "react";

export default function AddCategorie() {

    const [inputValue, setInputValue] = useState("");  // Para el input de agregar categoría

    const handleCreateCategorie = () => {
        fetch("http://localhost:3000/api/categorias/createCategoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre: inputValue }),
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
                setInputValue("")
            })
            .catch(error => {
                console.error("Error al enviar la solicitud:", error);
                alert("Error al enviar la solicitud");
            });
    };

    const formatJSON = (data) => {
        return JSON.stringify(data, null, 2);
    };

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="addCategorie actionCrud">
                <input
                    className="inputCRUD"
                    placeholder="Ingrese el nombre de la categoría..."
                    value={inputValue}
                    onChange={handleChangeInput}
                />
                <div className="titleCrud">
                    <button className="buttonCrud" onClick={handleCreateCategorie}>Agregar categoría</button>
                </div>
            </div>
        </>
    )

}