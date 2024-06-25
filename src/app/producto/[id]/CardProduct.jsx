export default function CardProduct({ producto }) {
  return (
    <div>
      <div>
        <h1>{producto.nombre}</h1>
      </div>
      <div>
        <p>Descripcion:</p>
        <p>{producto.descripcion}</p>
        <p>Precio:</p>
        <p>{producto.precio}</p>
        <p>Stock:</p>
        {producto.stock ? (
          <p>
            En stock. Contacta a nuestro{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{" "}
            para más información.
          </p>
        ) : (
          <p>No hay stock disponible.</p>
        )}
      </div>
    </div>
  );
}
