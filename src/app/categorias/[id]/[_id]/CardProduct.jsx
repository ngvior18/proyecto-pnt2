export default function CardProduct(props) {
  return (
    <div key={props.key}>
      <div>
        <h1>{props.producto.nombre}</h1>
      </div>
      <div>
        <p>Precio:</p>
        <p>{props.producto.precio}</p>
      </div>
    </div>
  );
}
