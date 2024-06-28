"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PageLogin() {
  const router = useRouter();

  async function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.status == 401) {
        toast.error(data.error);
      }
      if (response.status == 200) {
        const adminAuthToken = data.token;

        if (typeof window !== "undefined") {
          localStorage.setItem("adminAuthToken", adminAuthToken);
          console.log("adminAuthToken guardado en localStorage.");
        }

        toast.success("Logueo exitoso al administrador");
        //setear adminAuthToken
        router.push("/admin/");
      }
      if (response.status == 500) {
        console.error("Error interno del servidor");
      }
      // TODO1 : preguntar en el request por el request.status
      //const token = (await request.json()).token;
      // TODO 2: Guardar el token en el localstorage

      // TODO 3 redireccionar a la pagina original, antes de pedir credenciales
    } catch (error) {}
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-cyan-600">
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center font-cambria rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
