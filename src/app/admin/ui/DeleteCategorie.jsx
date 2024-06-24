"use client"
import React, { useState } from "react";

export default function DeleteCategorie() {

    const [inputValueDelete, setInputValueDelete] = useState("");  // Para el input de eliminar categoría

    const handleDeleteCategorie = () => {
        if (!inputValueDelete.trim()) {
            console.error("El ID de categoría a eliminar no puede estar vacío");
            setResponse("El ID de categoría a eliminar no puede estar vacío");
            return;
        }

        const url = `http://localhost:3000/api/categorias/deleteCategoria/${inputValueDelete}`;

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: inputValueDelete }),
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
            setInputValueDelete("")
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud");
        });
};

const formatJSON = (data) => {
    return JSON.stringify(data, null, 2);
};

    const handleChangeInputDelete = (event) => {
        setInputValueDelete(event.target.value);
    };

    return (
        <>
            <div className="deleteCategorie actionCrud">
                <input
                    className="inputCRUD"
                    placeholder="Ingrese el ID de la categoría..."
                    value={inputValueDelete}
                    onChange={handleChangeInputDelete}
                />
                <div className="titleCrud">
                    <button className="buttonCrud" onClick={handleDeleteCategorie}>Eliminar categoría</button>
                </div>
            </div>
        </>
    )

}