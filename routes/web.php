<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\PostinganController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ClientController::class, 'index'])->name("client");

Route::get("/login", [AuthController::class, 'login_index'])->name("login");

Route::group(['prefix' => "postingan", "as" => "postingan."], function () {
    Route::get("/semua", [PostinganController::class, 'semua'])->name("semua");
    Route::get("/buat-postingan-baru", [PostinganController::class, 'buat_postingan_baru'])->name("buat_postingan_baru");
    Route::get("/edit-postingan", [PostinganController::class, 'edit_postingan'])->name("edit_postingan");
});

Route::group(['prefix' => "kategori", "as" => "kategori."], function () {
    Route::get("/", [KategoriController::class, 'index'])->name("index");
});
