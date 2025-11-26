export default function Footer() {
    return (
        <footer className="w-full mt-16 bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Nombre / Marca */}
                <h2 className="text-lg font-semibold tracking-wide text-center md:text-left">
                    Automatizando © {new Date().getFullYear()}
                </h2>

                {/* Enlaces */}
                <div className="flex gap-6 text-sm">
                    <a href="#descripcion" className="hover:text-yellow-400 transition">Sobre nosotros</a>
                    <a href="#turnos" className="hover:text-yellow-400 transition">Turnos</a>
                    <a href="mailto:contacto@natuPets.com" className="hover:text-yellow-400 transition">Contacto</a>
                </div>

                {/* Redes */}
                <div className="flex gap-5">
                    <a href="https://wa.me/59165359695" className="hover:text-green-400 transition">WhatsApp</a>
                    <a href="#" className="hover:text-blue-400 transition">Facebook</a>
                    <a href="#" className="hover:text-pink-400 transition">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
