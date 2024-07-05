import { useState } from "react";
import './productos.css'

export default function AdminProductosList(props) {
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

  const categoriaToName = (categoriaId) => {
    const [nombreCategoria, setNombreCategoria] = useState([]);

    fetch(`http://localhost:3000/api/categorias/getCategorias/${categoriaId}`)
      .then((response) => response.json())
      .then((data) => setNombreCategoria(data.result.nombre))
      .catch((error) => console.error(error));

    return nombreCategoria;
  };

  const borrarCategoria = () => {
    //hacer pop up de si quiere borrar categoria y si pone ok mandar endpoint de borrar con id
  };

  return (
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
            <td>{categoriaToName(producto.categoriaId)}</td>
            <td>
              <button href={`/admin/productos/${producto._id}`}>Ver</button>
              <button href={`/admin/productos/editar/${producto._id}`}>
                Editar
              </button>
              <button onClick={borrarCategoria}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
