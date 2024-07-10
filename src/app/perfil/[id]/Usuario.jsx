export default function Usuario({ usuario }) {
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
      <div className="p-4">
        <div className="mt-4">
          <h3 className="text-center text-sm text-gray-700">
            {usuario.nombre}
          </h3>
          {/* <div className="text-center mt-4 flex justify-between items-center"> */}
          <p className="text-center text-sm font-bold text-gray-900">
            {usuario.email}
          </p>
          {/* <p className="text-sm font-bold text-gray-900">{usuario.password}</p> */}
          {/* </div> */}
        </div>
      </div>
    </li>
  );
}
