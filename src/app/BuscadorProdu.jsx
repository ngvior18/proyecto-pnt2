"use client";
import { useState, useEffect } from "react";
import CardProduct from "./[id]/CardProduct";

export default function BuscadorProductoPage({ params }) {
  const { nombre } = params;
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      fetch(`http://localhost:3000/api/productos/getProductos/${nombre}`, {
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
  }, [nombre]);

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