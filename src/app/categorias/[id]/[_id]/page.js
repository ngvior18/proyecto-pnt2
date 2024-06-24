"use client";
import { useState, useEffect } from "react";
import Producto from "../Producto";
import CardProduct from "./CardProduct";

export default function DetalleProductoPage({ params }) {
  const { id } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      fetch(`http://localhost:3000/api/productos/getProductos/${id}`, {
        method: "GET",
        headers: {
          Authentication: authToken,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data:", data);
          setProductos(data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  //console.log(producto);

  if (!productos) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      {productos.map((producto, index) => (
        <CardProduct key={index} producto={producto} />
      ))}
    </>
  );
}
