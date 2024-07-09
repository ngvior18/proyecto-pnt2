export default function CardProduct({ producto }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-80">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-lg font-semibold text-gray-700">Descripción:</p>
            <p className="text-gray-600">{producto.descripcion}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Precio:</p>
            <p className="text-gray-600">${producto.precio}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Stock:</p>
            {producto.stock ? (
              <p className="text-green-600">
                En stock. Contacta a nuestro{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  WhatsApp
                </a>{" "}
                para más información.
              </p>
            ) : (
              <p className="text-red-600">No hay stock disponible.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
