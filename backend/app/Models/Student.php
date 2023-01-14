<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_user',
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

    function User()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
