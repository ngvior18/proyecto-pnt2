import { redirect } from "next/navigation";

export default function PageLogin() {
  async function handlerLogin(formData) {
    "use server";
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
      const request = await fetch(
        'http://localhost:3000/api/login',
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(user),
        }
      );
  
      // TODO1 : preguntar en el request por el request.status
      //const token = (await request.json()).token;
      // TODO 2: Guardar el token en el localstorage
  
      // TODO 3 redireccionar a la pagina original, antes de pedir credenciales
      redirect(`/`);
    }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-60 w-auto"
            src="/images/Components.png"
            alt="img-login"
          />
          <h2 className="mt-12 text-center text-3xl font-bold leading-9 tracking-tight text-white font-cambria">
          Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={handlerLogin} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900">
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
                  className="block text-sm font-medium leading-6 text-white-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-cyan-600">
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
                className="flex w-full justify-center font-cambria rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
