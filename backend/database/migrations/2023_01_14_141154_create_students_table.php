<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_course');
            $table->string('name');
            $table->string('surname');
            $table->string('dni')->unique();
            $table->date('date_birth');
            $table->string('location_birth');
            $table->string('nationality');
            $table->string('address');
            $table->integer('phone');
            $table->string('email');
            $table->binary('picture');
            $table->timestamps();

            $table->foreign('id_course')->references('id')->on('courses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
};
