"use client";
import { useState, useEffect } from "react";
import Producto from "../../categorias/[id]/Producto";
import CardProduct from "./CardProduct";

export default function DetalleProductoPage({ params }) {
  const { id } = params;
  const [producto, setProducto] = useState(null);

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
          setProducto(data.producto);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  console.log(producto);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <CardProduct producto={producto} />
    </>
  );
}
