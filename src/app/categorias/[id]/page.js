"use client";
import { useState, useEffect } from "react";
import ProductosList from "./ProductosList.jsx";

export default function PageProductosCategoria({ params }) {
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
          setProductos(data);
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return <ProductosList productos={productos} />;
}
