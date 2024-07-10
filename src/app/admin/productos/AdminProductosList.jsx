"use client";
import "./productos.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminAuthToken, redirectUnauthorized } from "../utils";
import toast from "react-hot-toast";

export default function AdminProductosList(props) {
  const router = useRouter();
  const [categorias, setCategorias] = useState({});
  const [productoABorrar, setProductoABorrar] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const formatPrecio = (precio) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "ARS",
    }).format(precio);
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/categorias/getCategorias`
        );
        const data = await response.json();
        const mapCategorias = data.reduce((acc, categoria) => {
          acc[categoria._id] = categoria.nombre;
          return acc;
        }, {});
        setCategorias(mapCategorias);
      } catch (error) {
        console.error(error, "Error al obtener categorias");
      }
    };
    fetchCategorias();
  }, []);

  const handleClickBorrar = (idProdABorrar) => {
    setProductoABorrar(idProdABorrar);
    setShowPopup(true);
  };

  const handleConfirmDelete = async () => {
    if (productoABorrar) {
      try {
        const adminAuthToken = getAdminAuthToken();
        const response = await fetch(
          `http://localhost:3000/api/productos/deleteProducto/${productoABorrar}`,
          {
            method: "DELETE",
            headers: {
              Authentication: adminAuthToken,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (response.status == 202) {
          toast.success(data.message);
        }
        if (response.status == 404) {
          toast.error(data.message);
        }
        if (response.status == 401) {
          redirectUnauthorized(router);
        }
        router.refresh();
      } catch (error) {
        console.error("Error al enviar la petición de eliminación:", error);
      }
    }
    setShowPopup(false);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setProductoABorrar(null);
  };

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Destacado</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {props.productos.map((producto) => (
            <tr key={producto._id}>
              <td>{truncateText(producto.nombre, 20)}</td>
              <td>{truncateText(producto.descripcion, 30)}</td>
              <td>{formatPrecio(producto.precio)}</td>
              <td>{producto.stock ? "Sí" : "No"}</td>
              <td>{producto.destacado ? "Sí" : "No"}</td>
              <td>{categorias[producto.categoriaId] || ""}</td>
              <td>
                <a href={`/admin/productos/${producto._id}`}>Ver</a>
                <a href={`/admin/productos/editar/${producto._id}`}>Editar</a>
                <a onClick={() => handleClickBorrar(producto._id)}>Borrar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="mb-4 text-lg font-bold text-black">
              ¿Estás seguro de que quieres borrar este producto?
            </h2>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              >
                Sí
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 py-2 px-4 rounded text-black"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
