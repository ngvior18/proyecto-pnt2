"use client";
import ProdDestacados from "./ProdDestacados";
import useCategorias from "./categorias/useCategorias";

export default function Home() {
  const categorias = useCategorias();

  return (
    <div className="bg-gray-100">
      <div className="py-6">
        <form className="max-w-7xl mx-auto flex">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l-md p-2 text-gray-900"
            placeholder="Buscar productos..."
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white p-2 rounded-r-md hover:bg-cyan-800"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex">
          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/categoria_auricular.jpg"
              alt="Transistor"
            />
          </div>
          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/categoria_gabinete.jpg"
              alt="Transistor"
            />
          </div>

          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/caategoria_monitor.jpg"
              alt="Tuple"
            />
          </div>
          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/categoria_mouse.jpg"
              alt="SavvyCal"
            />
          </div>
          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/categoria_placa-de-video.jpg"
              alt="Statamic"
            />
          </div>
          <div className="border border-grey bg-white flex items-center justify-center p-4 flex-1">
            <img
              className="max-h-12 w-full object-contain"
              src="/images/categoria_teclado.jpg"
              alt="Statamic"
            />
          </div>
        </div>

      </div>

      <div className="pr-4 pl-7">
        <div className="bg-black/30 border-2 border-black shadow-md p-6 text-center">
          <h1 className="text-black font-bold text-xl">Productos Destacados</h1>
          <ProdDestacados />
        </div>

      </div>

      <div className="container mx-auto py-12 ocultarMayorista">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="pr-4 pl-7">
            <div className="bg-white border-2 border-black shadow-md p-4 text-center">
              <div className="block-features__icon  flex items-center justify-center">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/wired/64/truck.png"
                  alt="truck"
                />
              </div>


              <div class="block-features__content">

                <div
                  className="block-features__title text-xl font-bold mb-2"
                  data-ar="Realizamos envios"
                  data-br="Fazemos envios"
                  data-en="We make shipments"
                >
                  Realizamos envios
                </div>
                <h1 className="text-black font-semibold">Realizamos Envios</h1>
                <div className="text-gray-600">
                  <span data-ar="Conocé nuestros medios de envios disponibles">
                    Conocé nuestros medios de envios disponibles
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border-2 border-black  shadow-md p-4 text-center">
              <div className="block-features__icon flex items-center justify-center">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/ios/100/bank-card-back-side--v1.png"
                  alt="bank-card-back-side--v1"
                />
              </div>
              <div class="block-features__content">
                <div
                  className="block-features__title text-xl font-bold mb-2"
                  data-ar="Paga tus compras aquí"
                  data-br="Pague suas compras aqui"
                  data-en="Pay your purchases here"
                >
                  Paga tus compras aquí
                </div>
                <h1 className="text-black font-semibold">
                  Paga tus compras aquí
                </h1>
                <div className="block-features__subtitle text-gray-600">
                  <span data-ar="Conocé todos los medios de pagos disponibles">
                    Conocé todos los medios de pagos disponibles
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="pl-4 pr-7">
            <div className="bg-white border-2 border-black shadow-md p-4 text-center">
              <div className="block-features__icon flex items-center justify-center">
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/ios/100/customer-support--v1.png"
                  alt="customer-support--v1"
                />
              </div>
              <div class="block-features__content">
                <div
                  className="block-features__title text-xl font-bold mb-2"
                  data-ar="Soporte"
                  data-br="Apoio, suporte"
                  data-en="Support"
                >
                  Soporte
                </div>
                <div className="block-features__subtitle text-gray-600">
                  <h1 className="text-black font-semibold">Soporte</h1>
                  <span data-ar="Comunícate con nosotros">
                    Comunícate con nosotros
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
