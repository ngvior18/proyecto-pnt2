"use client";

import {
  getAdminAuthToken,
  redirectUnauthorized,
  verifyAdminAuthToken,
} from "@/app/admin/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditarProducto({
  nombre: initialNombre,
  descripcion: initialDescripcion,
  precio: initialPrecio,
  stock: initialStock,
  destacado: initialDestacado,
  categoriaId: initialCategoriaId,
  id,
}) {
  const router = useRouter();
  const [nombre, setNombre] = useState(initialNombre);
  const [descripcion, setDescripcion] = useState(initialDescripcion);
  const [precio, setPrecio] = useState(initialPrecio);
  const [stock, setStock] = useState(initialStock);
  const [destacado, setDestacado] = useState(initialDestacado);
  const [categoria, setCategoria] = useState(initialCategoriaId);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (verifyAdminAuthToken(router)) {
      const fetchCategorias = async () => {
        const response = await fetch(
          `http://localhost:3000/api/categorias/getCategorias`
        );
        const c = await response.json();
        setCategorias(c);
      };
      fetchCategorias();
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre.length < 10 || descripcion.length < 20 || precio === "") {
      toast.error("Faltan completar datos");
      return;
    }

    const productoEditado = {
      _id: id,
      nombre,
      descripcion,
      precio: precio.toString(),
      stock,
      destacado,
      categoriaId: categoria,
    };

    try {
      const adminAuthToken = getAdminAuthToken();
      const response = await fetch(
        `http://localhost:3000/api/productos/editProducto`,
        {
          method: "PUT",
          headers: {
            Authentication: adminAuthToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productoEditado),
        }
      );
      const data = await response.json();

      if (response.status === 401) {
        redirectUnauthorized(data.message, router);
      }

      if (response.status === 400 || response.status === 404) {
        toast.error(data.message);
        return;
      }
      if (response.status === 200) {
        toast.success(data.message);
        router.push("/admin/productos");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al editar el producto.");
    }
  };

  const handleCancel = () => {
    router.push("/admin/productos");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 w-full text-black"
            required
            minLength={10}
          />
        </div>
        <div>
          <label className="block text-gray-700">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="border p-2 w-full text-black"
            required
            minLength={20}
          />
        </div>
        <div>
          <label className="block text-gray-700">Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="border p-2 w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Stock</label>
          <input
            type="checkbox"
            checked={stock}
            onChange={() => setStock(!stock)}
            className="mr-2"
          />
          {stock ? "Sí" : "No"}
        </div>
        <div>
          <label className="block text-gray-700">Destacado</label>
          <input
            type="checkbox"
            checked={destacado}
            onChange={() => setDestacado(!destacado)}
            className="mr-2"
          />
          {destacado ? "Sí" : "No"}
        </div>
        <div>
          <label className="block text-gray-700">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="border p-2 w-full text-black"
            required
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancelar
          </button>
          <button type="submit" className="bg-cyan-700 text-white p-2 rounded">
            Editar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
