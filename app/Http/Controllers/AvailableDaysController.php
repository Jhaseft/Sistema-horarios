<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;

class AvailableDaysController extends Controller
{
    public function index()
    {
        $dias = [];
        $hoy = Carbon::today();
        $limite = 30; // próximos 30 días

        for ($i = 0; $i < $limite; $i++) {
            $fecha = $hoy->copy()->addDays($i);
            $nombre = $fecha->locale('es')->isoFormat('dddd');
            $numero = $fecha->format('d');
            $mes = $fecha->locale('es')->isoFormat('MMMM');

            $dias[] = [
                'label' => "{$nombre} {$numero} {$mes}",
                'value' => $fecha->format('Y-m-d')
            ];
        }

        return response()->json($dias);
    }
}
