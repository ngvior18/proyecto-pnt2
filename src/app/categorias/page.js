"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { redirectUnauthorized } from "../admin/utils";
import ProductosList from "./[id]/ProductosList";

export default function PageCategorias() {
  const route = useRouter();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        if (typeof window !== "undefined") {
          const authToken = localStorage.getItem("authToken");
          const response = await fetch(
            `http://localhost:3000/api/productos/getProductos`,
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
            redirectUnauthorized(route);
            return;
          }
          if (response.status === 404) {
            return;
          }
          if (response.status === 200) {
            setProductos(data.products);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllProducts();
  }, []);

  if (productos.length == 0) {
    return (
      <>
        <p className="text-center text-blue-400"> No hay productos</p>
      </>
    );
  }

  return (
    <>
      <ProductosList productos={productos} />
    </>
  );
}
