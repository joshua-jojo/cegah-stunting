<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Postingan;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $props = [
            "kategori" => Kategori::select(["id", "nama"])->get(),
            "postingan" => Postingan::select(['id', 'judul','kategori_id'])->with(["kategori"])->get()
        ];
        return inertia()->render("client/ClientPage", $props);
    }

    public function kategori_berita(Kategori $kategori) {
        $props = [
            "kategori" => $kategori->load(["postingan:id,judul,kategori_id"])
        ];

        return inertia()->render("client/ClientKategoriBerita",$props);
    }
}
