<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    public function index()
    {
        $kategori = Kategori::withCount("postingan")->get();
        $props = [
            "kategori" => $kategori
        ];
        return inertia()->render("kategori/KategoriIndexPage", $props);
    }

    public function tambah(Request $request)
    {
        $request->validate([
            "nama" => "required|string|max:100|unique:kategoris,nama"
        ]);

        $kategori = new Kategori;
        $kategori->nama = $request->nama;
        $kategori->save();

        return redirect()->route("kategori.index");
    }

    public function edit(Request $request)
    {
        $request->validate([
            "id" => "required|exists:kategoris,id",
            "nama" => "required|unique:kategoris,nama"
        ]);

        $kategori = Kategori::find($request->id);
        $kategori->nama = $request->nama;
        $kategori->save();
    }

    public function hapus(Request $request)
    {
        $request->validate([
            "id" => "required|exists:kategoris,id"
        ]);

        $kategori = Kategori::find($request->id);
        $kategori->delete();
    }
}
