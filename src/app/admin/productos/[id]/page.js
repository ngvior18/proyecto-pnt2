"use client";

import { useEffect, useState } from "react";
import VerProducto from "./VerProducto";
import toast, { Toaster } from "react-hot-toast";
import { verifyAdminAuthToken } from "../../utils";
import { useRouter } from "next/navigation";

export default function ProductoDetalle(props) {
  const router = useRouter();
  const { id } = props.params;
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (verifyAdminAuthToken(router)) {
      const fetchProducto = async () => {
        if (typeof window !== "undefined") {
          const adminAuthToken = localStorage.getItem("adminAuthToken");

          try {
            const result = await fetch(
              `http://localhost:3000/api/productos/getProductos/${id}`,
              {
                method: "GET",
                headers: {
                  Authentication: adminAuthToken,
                  "Context-Type": "application/json",
                },
              }
            );
            const data = await result.json();
            setProducto(data.producto);
          } catch (error) {
            console.error(error);
          }
        }
      };

      fetchProducto();
    }
  }, [id]);

  if (!producto) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Cargando producto...</p>
      </div>
    );
  }

  return (
    <>
      <VerProducto
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        precio={producto.precio}
        stock={producto.stock}
        destacado={producto.destacado}
        categoriaId={producto.categoriaId}
        id={producto._id}
      />
    </>
  );
}
