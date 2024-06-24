import React from "react";

export default function GetUsers() {
    const handleGetAllUsers = () => {
        fetch("http://localhost:3000/api/usuarios/getUsuarios")
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

    return (
        <button onClick={handleGetAllUsers} className="buttonCrud fw">Obtener todos los usuarios.</button>
    );
}
