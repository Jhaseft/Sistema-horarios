import { Head } from '@inertiajs/react';
import Header from '@/componentswelcome/Header';
import Descripcion from '@/componentswelcome/Descripcion';
import Turnos from '@/componentswelcome/Turnos';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Inicio" />
            <Header />
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-5xl mx-auto">
                <Descripcion />
                <Turnos />
            </div>
        </>
    );
}
