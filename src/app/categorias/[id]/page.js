"use client";
import { useState, useEffect } from "react";
import ProductosList from "./ProductosList.jsx";
import "./productos.css";

export default function PageProductosCategoria({ params }) {
  const { id } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      fetch(
        `http://localhost:3000/api/productos/getProductos?categoria=${id}`,
        {
          method: "GET",
          headers: {
            Authentication: authToken,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setProductos(data.filteredProducts);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);
  console.log(productos);
  return (
    <div>
      <ProductosList productos={productos} />
    </div>
  );
}
