"use client"
import React, { useState } from "react";

export default function EditUser() {

    const [inputValueEditUser, setInputValueEditUser] = useState("");  // Para el input de obtener categoría
    const [inputValueNombreEditCategoria, setInputValueNombreEditCategoria] = useState("");  // Para el input de obtener categoría

    const handleEditCategoria = () => {
        fetch(`http://localhost:3000/api/usuarios/editUsuario`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: inputValueEditUser, nombre: inputValueNombreEditCategoria }),
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
        setInputValueEditUser(event.target.value);
    };

    const handleChangeNombreEditCategoria = (event) => {
        setInputValueNombreEditCategoria(event.target.value);
    };

    return (
        <>
            <div className="editCategoria actionCrud">
                <input
                    className="inputCRUD editInputCRUDUser"
                    placeholder="Ingrese el ID"
                    value={inputValueEditUser}
                    onChange={handleChangeEditCategoria}
                />
                <input
                    className="inputCRUD editInputCRUDUser"
                    placeholder="Ingrese el nombre"
                    value={inputValueNombreEditCategoria}
                    onChange={handleChangeNombreEditCategoria}
                />
                <input
                    className="inputCRUD editInputCRUDUser"
                    placeholder="Ingrese el email"
                    value={inputValueNombreEditCategoria}
                    onChange={handleChangeNombreEditCategoria}
                />
                <input
                    className="inputCRUD editInputCRUDUser"
                    placeholder="Ingrese la contraseña"
                    type="password"
                    value={inputValueNombreEditCategoria}
                    onChange={handleChangeNombreEditCategoria}
                />
            </div>
            <button style={{width: '100% !important'}}  className="buttonCrud" onClick={handleEditCategoria}>Editar usuario</button>
        </>
    )

}