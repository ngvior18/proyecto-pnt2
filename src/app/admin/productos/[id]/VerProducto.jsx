"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function VerProducto({
  nombre,
  descripcion,
  precio,
  stock,
  destacado,
  categoriaId,
  id,
}) {
  const [categoria, setCategoria] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const result = await fetch(
          `http://localhost:3000/api/categorias/getCategorias/${categoriaId}`
        );

        const data = await result.json();
        if (data.success) {
          setCategoria(data.result.nombre);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategoria();
  }, [categoriaId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalle del Producto</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Nombre:</span> {nombre}
        </div>
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Descripción:</span>{" "}
          {descripcion}
        </div>
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Precio:</span> ${precio}
        </div>
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Stock:</span>{" "}
          {stock ? "Sí" : "No"}
        </div>
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Destacado:</span>{" "}
          {destacado ? "Sí" : "No"}
        </div>
        <div className="mb-4 text-black">
          <span className="font-semibold text-black">Categoría:</span>{" "}
          {categoria || "Cargando..."}
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/admin/productos")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Volver al listado
        </button>
        <button
          onClick={() => router.push(`/admin/productos/editar/${id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Editar producto
        </button>
      </div>
    </div>
  );
}
