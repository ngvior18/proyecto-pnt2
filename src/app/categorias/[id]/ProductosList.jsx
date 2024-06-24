import Producto from "./Producto.jsx";

export default function ProductosList(props) {
  return (
    <ul>
      {props.productos.map((producto) => {
        return (
          <Producto
            _id={producto["_id"]}
            nombre={producto["nombre"]}
            precio={producto["precio"]}
            stock={producto["stock"]}
            destacado={producto["destacado"]}
            categoriaId={producto["categoriaId"]}
          />
        );
      })}
    </ul>
  );
}
