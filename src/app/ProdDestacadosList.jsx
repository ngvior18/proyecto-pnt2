import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{p.nombre}</p>
                <p>{p.descripcion}</p>
                <button className="bg-cyan-700 text-white text-lg px-10 py-1 rounded-xl">
                  Ver detalle
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
