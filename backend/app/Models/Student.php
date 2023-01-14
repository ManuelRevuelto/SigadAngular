<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_course',
        'name',
        'surname',
        'dni',
        'date_birth',
        'location_birth',
        'nationality',
        'address',
        'phone',
        'email',
        'picture',
    ];
}
