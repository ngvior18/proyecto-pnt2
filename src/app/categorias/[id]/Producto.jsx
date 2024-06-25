import "./productos.css";
import Link from "next/link";

export default function Producto(props) {
  return (
    <li className="producto-item">
      <div className="card producto-item__content">
        <div className="producto-item__info">
          <h3>{props.nombre}</h3>
          <p>Precio: ${props.precio}</p>
        </div>
        <div>
          <Link href={`/producto/${props._id}`}>
            <button className="buttonCrud">Ver Detalle</button>
          </Link>
        </div>
      </div>
    </li>
  );
}
