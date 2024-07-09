import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function ProdDestacadosList(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20">
      <Slider {...settings}>
        {props.Prods.map((p) => {
          return (
            <div className="bg-white h-[450px] text-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col justify-between items-center gap-4 p-4 h-full">
                <div className="flex-1 w-full flex flex-col items-center pt-4">
                  <p className="text-2xl font-bold pt-4 pb-8">{p.nombre}</p>
                  <p className="text-gray-700 text-left w-full overflow-hidden text-ellipsis max-h-24 relative">
                    {p.descripcion.length > 120 ? (
                      <span>
                        {p.descripcion.slice(0, 120)}...
                        <Link
                          href={`/producto/${p._id}`}
                          className="text-blue-500 underline"
                        >
                          ver más
                        </Link>
                      </span>
                    ) : (
                      p.descripcion
                    )}
                  </p>
                </div>
                <Link href={`/producto/${p._id}`}>
                  <button className="bg-cyan-700 text-white text-lg px-10 py-2  hover:bg-cyan-800 transition-colors duration-300">
                    Ver detalle
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
