"use client";
import {
  getAdminAuthToken,
  redirectUnauthorized,
  verifyAdminAuthToken,
} from "@/app/admin/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditarProducto from "./EditarProducto";

export default function PageEditarProducto(props) {
  const router = useRouter();
  const [producto, setProducto] = useState(null);
  const { id } = props.params;

  useEffect(() => {
    if (verifyAdminAuthToken(router)) {
      const fetchProduct = async () => {
        try {
          const adminAuthToken = getAdminAuthToken();

          const response = await fetch(
            `http://localhost:3000/api/productos/getProductos/${id}`,
            {
              method: "GET",
              headers: {
                Authentication: adminAuthToken,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();

          // manejo codigos de respuestas (innecesarios ya que para ingresar aqui se clickea sobre un producto existente)
          if (response.status == 401) {
            redirectUnauthorized(router);
            return;
          }
          if (response.status === 400 || response.status === 404) {
            toast.error(data.message);
            router.push("/admin/productos");
          }
          if (response.status == 200) {
            setProducto(data.producto);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (!producto) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Cargando datos producto...</p>
      </div>
    );
  }

  return (
    <>
      <EditarProducto
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
