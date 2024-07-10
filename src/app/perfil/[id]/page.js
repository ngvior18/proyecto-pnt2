"use client";
import Usuario from "./Usuario";
import { useState, useEffect } from "react";

export default function PerfilPage({ params }) {
  const { id } = params;
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      fetch(`http://localhost:3000/api/usuarios/getUsuarios/${id}`, {
        method: "GET",
        headers: {
          Authentication: authToken,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data:", data);
          setUsuario(data.usuario);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  console.log(usuario);

  if (!usuario) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Usuario usuario={usuario}/>
    </>
  );
}