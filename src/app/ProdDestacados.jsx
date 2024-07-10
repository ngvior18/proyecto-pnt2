"use client";
import { useState, useEffect } from "react";
import ProdDestacadosList from "./ProdDestacadosList";

export default function ProdDestacados(props) {
  const [showComponent, setShowComponent] = useState(true);
  const [prodDestacados, setProdDestacados] = useState([]);

  useEffect(() => {
    const fetchProdDestacados = async () => {
      try {
        if (typeof window !== "undefined") {
          const authToken = localStorage.getItem("authToken");
          if (authToken) {
            const response = await fetch(
              "http://localhost:3000/api/productos/getProductos?destacado=true",
              {
                method: "GET",
                headers: {
                  Authentication: authToken,
                  "Content-Type": "application/json",
                },
              }
            );

            const data = await response.json();

            if (response.status == 401) {
              setShowComponent(false);
              return;
            }
            setProdDestacados(data.products);
          } else {
            setShowComponent(false);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProdDestacados();
  }, []);
  // console.log(showComponent, "showcomp");
  console.log(prodDestacados, "prodsdestac");
  if (!showComponent) {
    console.log(showComponent, "showcomp");
    return (
      <>
        <p className="text-red-500 text-center m-10">
          {" "}
          Para ver los prod destacados debes{" "}
          <a
            href="/login"
            className="text-blue-500 font-bold underline-offset-10"
          >
            ingresar a una cuenta
          </a>
        </p>
      </>
    );
  }

  return (
    <div className="w-3/4 m-auto pt-12 pb-12">
      <ProdDestacadosList Prods={prodDestacados} />
    </div>
  );
}
