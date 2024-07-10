"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { redirectUnauthorized, verifyAdminAuthToken } from "../../utils";

export default function PageAgregarProducto() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState(true);
  const [destacado, setDestacado] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (verifyAdminAuthToken(router)) {
      //seteo de categorias para select
      fetch(`http://localhost:3000/api/categorias/getCategorias`)
        .then((result) => result.json())
        .then((data) => setCategorias(data));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (nombre.length < 10 || descripcion.length < 20 || precio === "") {
      toast.error("Faltan completar datos");
      return;
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio: precio.toString(),
      stock,
      destacado,
      categoriaId: categoria,
    };

    try {
      if (typeof window !== "undefined") {
        const adminAuthToken = localStorage.getItem("adminAuthToken");

        const result = await fetch(
          `http://localhost:3000/api/productos/createProducto`,
          {
            method: "POST",
            headers: {
              Authentication: adminAuthToken,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoProducto),
          }
        );
        const data = await result.json();

        if (result.status == 401) {
          redirectUnauthorized(data.message, router);
        }

        if (result.status == 400) {
          toast.error(data.message);
          return;
        }
        if (result.status == 201) {
          toast.success(data.message);
          router.push("/admin/productos");
        }
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al agregar el producto.");
    }
  };

  const handleCancel = () => {
    router.push("/admin/productos");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>
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
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
}
