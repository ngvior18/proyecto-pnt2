"use client"
import React, { useState } from "react";

export default function AddUser() {

    const [inputValue, setInputValue] = useState("");  // Para el input de agregar categoría
    const [inputValueEmail, setInputValueEmail] = useState("");  // Para el input de agregar categoría
    const [inputValuePassword, setInputValuePassword] = useState("");  // Para el input de agregar categoría


    const handleCreateCategorie = () => {
        fetch("http://localhost:3000/api/usuarios/createUsuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre: inputValue, email: inputValueEmail, password: inputValuePassword }),
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
                setInputValueEmail("")
                setInputValuePassword("")
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

    const handleChangeInputEmail = (event) => {
        setInputValueEmail(event.target.value);
    };

    const handleChangeInputPassword = (event) => {
        setInputValuePassword(event.target.value);
    };

    return (
        <>
            <div className="addCategorie actionCrud">
                <input
                    className="inputCRUD inputAddUser"
                    placeholder="Ingrese el nombre del usuario..."
                    value={inputValue}
                    onChange={handleChangeInput}
                />
                <input
                    className="inputCRUD inputAddUser"
                    placeholder="Ingrese el email del usuario..."
                    value={inputValueEmail}
                    onChange={handleChangeInputEmail}
                />
                <input
                    className="inputCRUD inputAddUser"
                    placeholder="Ingrese la contraseña del usuario..."
                    value={inputValuePassword}
                    type="password"
                    onChange={handleChangeInputPassword}
                />
                <div className="titleCrud">
                    <button className="buttonCrud" onClick={handleCreateCategorie}>Agregar usuario</button>
                </div>
            </div>
        </>
    )

}