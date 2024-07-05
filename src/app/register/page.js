"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function PageSingup() {
  const router = useRouter();
  // async function handlerSingup(formData) {
  //   "use server";
  //   const user = {
  //     nombre: formData.get("nombre"),
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //   };

  //   const response = await fetch("http://localhost:3000/api/register", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(user),
  //   });
  //   const data = await response.json();
  //   if (response.status === 400) {
  //     toast.error(data.message);
  //   }
  //   if (response.status === 201) {
  //     toast.success(data.message);
  //     redirect(`/login`);
  //   }

  // }

  const handlerSingup = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.status === 400) {
      toast.error(data.message);
    }
    if (response.status === 201) {
      toast.success(data.message);
      router.push(`/login`);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-60 w-auto"
            src="/images/Components.png"
            alt="img-register"
          />
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight  text-white font-cambria">
            Registrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlerSingup} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                className="flex w-full justify-center rounded-md bg-cyan-600 font-cambria px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
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
