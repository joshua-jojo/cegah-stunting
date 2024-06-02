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
Route::get('/kategori/{kategori}', [ClientController::class, 'kategori_berita'])->name("client.kategori");

Route::get("/login", [AuthController::class, 'login_index'])->name("login");
Route::post("/login", [AuthController::class, 'cek_login'])->name("login.cek");
Route::post("/logout", [AuthController::class, 'logout'])->name("logout");

Route::group(['prefix' => "postingan", "as" => "postingan."], function () {
    Route::get("/semua", [PostinganController::class, 'semua'])->name("semua")->middleware("auth");
    Route::get("/buat-postingan-baru", [PostinganController::class, 'buat_postingan_baru'])->name("buat_postingan_baru")->middleware("auth");
    Route::post("/simpan-postingan-baru", [PostinganController::class, 'simpan_postingan_baru'])->name("simpan_postingan_baru")->middleware("auth");
    Route::get("/show-postingan/{id}", [PostinganController::class, 'show_postingan'])->name("show_postingan");
    Route::get("/edit-postingan/{postingan}", [PostinganController::class, 'edit_postingan'])->name("edit_postingan")->middleware("auth");
    Route::post("/simpan-postingan", [PostinganController::class, 'simpan_postingan_edit'])->name("simpan_postingan_edit")->middleware("auth");
    Route::get("/hapus-postingan/{postingan}", [PostinganController::class, 'hapus'])->name("hapus")->middleware("auth");
});

Route::group(['prefix' => "kategori", "as" => "kategori.",'middleware' => "auth"], function () {
    Route::get("/", [KategoriController::class, 'index'])->name("index");
    Route::post("/", [KategoriController::class, 'tambah'])->name("tambah");
    Route::post("/edit", [KategoriController::class, 'edit'])->name("edit");
    Route::post("/hapus", [KategoriController::class, 'hapus'])->name("hapus");
});
