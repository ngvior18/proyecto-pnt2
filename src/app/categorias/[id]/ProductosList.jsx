import Producto from "./Producto.jsx";
import "./productos.css";

export default function ProductosList(props) {
  if (props.length <= 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <ul className="producto-list">
      {props.productos.map((producto) => (
        <Producto
          _id={producto._id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          destacado={producto.destacado}
          categoriaId={producto.categoriaId}
        />
      ))}
    </ul>
  );
}
