import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function DiasCarousel({ dias, seleccion, setSeleccion }) {
    return (
        <Swiper
            modules={[FreeMode]}
            freeMode={{ enabled: true }}
            spaceBetween={20}
            slidesPerView="auto"
            className="py-3"
        >
            {dias.map((dia, i) => {
                const activo = dia.value === seleccion;
                const [nombre, numero, mes] = dia.label.split(" ");

                return (
                    <SwiperSlide key={i} style={{ width: "80px" }}>
                        <button
                            onClick={() => setSeleccion(dia.value)}
                            className={`flex flex-col items-center px-3 py-2 rounded-xl border shadow transition-all duration-150
                                ${activo ? "bg-black text-white border-black" : "bg-white text-black hover:bg-gray-100 border-gray-300"}`}
                        >
                            <span className="text-xs capitalize">{nombre}</span>
                            <span className="text-xl font-bold">{numero}</span>
                            <span className="text-xs capitalize">{mes}</span>
                        </button>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
