<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_course',
        'description',
        'status',
        'duration',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
