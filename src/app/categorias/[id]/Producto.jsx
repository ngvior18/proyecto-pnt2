export default function Producto(props) {
  return (
    <li>
      <div>
        <div>
          <p>{props.nombre}</p>
          <p>{props.precio}</p>
        </div>
        <div>
          <button>Ver Detalles</button>
        </div>
      </div>
    </li>
  );
}
