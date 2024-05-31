<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostinganController extends Controller
{
    public function semua() {
        return inertia()->render("postingan/SemuaPostinganPage");
    }

    public function buat_postingan_baru() {
        return inertia()->render("postingan/BuatPostinganBaruPage");
    }

    public function edit_postingan() {
        return inertia()->render("postingan/EditPostinganPage");
    }
}
