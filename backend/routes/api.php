<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\IncidentController;
use App\Http\Controllers\MarkController;
use App\Http\Controllers\SubjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::resource('asignaturas', SubjectController::class);
    Route::resource('faltas', AttendanceController::class);
    Route::resource('incidencias', IncidentController::class);
    Route::resource('notas', MarkController::class);
});

