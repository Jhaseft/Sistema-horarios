import { Head } from '@inertiajs/react';
import Header from '@/componentswelcome/Header';
import Descripcion from '@/componentswelcome/Descripcion';
import Turnos from '@/componentswelcome/Turnos';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Inicio" />
            <Header />
            <div className='flex flex-col border   px-4 md:mx-52 lg:mx-20 sm:mx-20 items-center justify-center'>
                    <Descripcion />    
                    <Turnos />
            </div>
        </>
    );
}
