import Link from "next/link";

export default function Producto(props) {
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
       <div className="p-4">
       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
          <img
            src="url_de_la_imagen_del_producto"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          </div>
          <div className="mt-4">
          <h3 className="text-sm text-gray-700">{props.nombre}</h3>
          <div className="mt-4 flex justify-between items-center">
          <p className="text-sm font-bold text-gray-900">Precio: ${props.precio}</p>
        </div>
        </div>
        <div>
        <div className="mt-auto p-4 flex justify-center items-center">
          <Link href={`/producto/${props._id}`}>
            <button className="inline-block bg-black text-white px-12 py-1 hover:bg-cyan-700 transition-colors duration-300 text-center">Ver</button>
          </Link>
        </div>
      </div>
    </div>
    </li>
  );
}
