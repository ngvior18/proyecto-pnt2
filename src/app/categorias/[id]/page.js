"use client";
import { useRouter } from "next/navigation.js";
import { useState, useEffect } from "react";
import ProductosList from "./ProductosList.jsx";
import toast from "react-hot-toast";

export default function PageProductosCategoria({ params }) {
  const router = useRouter();
  const { id } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");

      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/api/productos/getProductos?categoria=${id}`,
            {
              method: "GET",
              headers: {
                Authentication: authToken,
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          if (response.status === 404) {
            // toast.error(data.message);
            // router.push("/");
            console.log(data, "404");
            return;
          }
          if (response.status === 200) {
            setProductos(data.products);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      // fetch(
      //   `http://localhost:3000/api/productos/getProductos?categoria=${id}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       Authentication: authToken,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setProductos(data.products);
      //   })
      //   .catch((error) => console.log(error));
    }
  }, [id]);
  console.log(productos, "Productos");

  if (productos.length == 0) {
    return (
      <>
        <p className="text-center text-blue-400">
          {" "}
          No hay productos en esta categoría
        </p>
      </>
    );
  }

  return (
    <div>
      <ProductosList productos={productos} />
    </div>
  );
}
