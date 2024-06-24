"use client";
import { useState, useEffect } from "react";
import ProdDestacadosList from "./ProdDestacadosList";

export default function ProdDestacados(props) {
  const [prodDestacados, setProdDestacados] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");

      fetch("http://localhost:3000/api/productos/getProductos?destacado=true", {
        method: "GET",
        headers: {
          Authentication: authToken,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProdDestacados(data.filteredProducts))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div className="w-3/4 m-auto">
      <ProdDestacadosList Prods={prodDestacados} />
    </div>
  );
}
