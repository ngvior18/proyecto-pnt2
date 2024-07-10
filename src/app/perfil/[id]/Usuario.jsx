export default function Usuario({ usuario }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-16">
      <div className="flex justify-center mt-6">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="/images/avatar.com.png"
          alt="Avatar"
        />
      </div>
      <div className="p-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700">{usuario.nombre}</h3>
          <p className="text-sm text-gray-500">{usuario.email}</p>
        </div>
      </div>
    </div>
  );
}


