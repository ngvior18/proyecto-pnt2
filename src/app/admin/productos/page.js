"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminProductosList from "./AdminProductosList.jsx";
import { verifyAdminAuthToken, redirectUnauthorized } from "../utils/index.js";
import { useRouter } from "next/navigation.js";

export default function PageProductosAdmin() {
  const router = useRouter();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //si se verifica que el usuario tiene adminAuthToken continua, si no devuelv toast.error y redirecciona a login
      if (verifyAdminAuthToken(router)) {
        if (typeof window !== "undefined") {
          const adminAuthToken = localStorage.getItem("adminAuthToken");
          try {
            const response = await fetch(
              `http://localhost:3000/api/productos/getProductos`,
              {
                method: "GET",
                headers: {
                  Authentication: adminAuthToken,
                  "Content-Type": "application/json",
                },
              }
            );

            const data = await response.json();
            try {
              if (response.status == 401) {
                redirectUnauthorized(data.message, router);
                return;
              }
            } catch (error) {
              console.error(error);
            }
            console.log(data, "Resp prods");
            // validar en el listado que success sea true, caso contrario mostrar que no existen productos todavia
            setProductos(data.products);
          } catch (error) {
            console.error(error);
            toast.error("Error interno del sistema");
          }
        }
      }
    };
    fetchData();
  }, []);
  // console.log(productos, "listado prods");
  return (
    <>
      <div>
        <h1 className="">Productos</h1>
      </div>
      <div className="flex justify-end p-4">
        <a
          href={`/admin/productos/agregar`}
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 ml-2 rounded border border-white"
        >
          Agregar Producto
        </a>
      </div>
      <div>
        <AdminProductosList productos={productos} />
      </div>
    </>
  );
}
