<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function businessHours() {
        return $this->hasMany(BusinessHour::class);
    }

    public function appointments() {
        return $this->hasMany(Appointment::class);
    }

    public function exceptions() {
        return $this->hasMany(DayException::class);
    }
}
