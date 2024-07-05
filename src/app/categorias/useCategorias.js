"use client";
import { useState, useEffect } from "react";

export default function useCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const authToken = localStorage.getItem("authToken");

      fetch(
        "http://localhost:3000/api/categorias/getCategorias"
        //   {
        //   method: "GET",
        //   headers: {
        //     Authentication: authToken,
        //     "Content-Type": "application/json",
        //   },
        // }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "Categorias");
          setCategorias(data);
        })
        .catch((error) => console.log(error));
    // }
  }, []);

  return categorias;
}
