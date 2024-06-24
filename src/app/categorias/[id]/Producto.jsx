import "./productos.css";

export default function Producto(props) {
  return (
    <li className="producto-item">
      <div className="card producto-item__content">
        <div className="producto-item__info">
          <h3>{props.nombre}</h3>
          <p>{props.precio}</p>
        </div>
        <div>
          <button>Ver Detalles</button>
        </div>
      </div>
    </li>
  );
}
