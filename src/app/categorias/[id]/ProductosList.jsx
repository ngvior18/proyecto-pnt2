import Producto from "./Producto.jsx";


export default function ProductosList(props) {
  if (props.length <= 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mx-auto max-w-7xl pt-11 pb-11">
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
