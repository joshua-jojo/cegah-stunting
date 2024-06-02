<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Postingan;
use Illuminate\Http\Request;

class PostinganController extends Controller
{
    public function semua()
    {
        $props = [
            "postingan" => Postingan::with("kategori")->get()
        ];
        return inertia()->render("postingan/SemuaPostinganPage", $props);
    }

    public function buat_postingan_baru()
    {
        $props = [
            "kategori" => Kategori::select(["id", 'nama'])->get(),
        ];
        return inertia()->render("postingan/BuatPostinganBaruPage", $props);
    }

    public function edit_postingan(Postingan $postingan)
    {
        $props = [
            "postingan" => $postingan,
            "kategori" => Kategori::select(['id', 'nama'])->get()
        ];
        return inertia()->render("postingan/EditPostinganPage", $props);
    }

    public function simpan_postingan_baru(Request $request)
    {
        $request->validate([
            "kategori_id" => "required|exists:kategoris,id",
            "judul" => "required|unique:postingans,judul",
            "posting" => "required"
        ]);

        $postingan = new Postingan();
        $postingan->judul = $request->judul;
        $postingan->kategori_id = $request->kategori_id;
        $postingan->postingan = $request->posting;
        $postingan->save();

        return redirect()->route("postingan.semua");
    }

    public function show_postingan(Postingan $id)
    {
        $props = [
            "postingan" => $id->load("kategori"),
        ];

        return inertia()->render("client/ClientPostingPage", $props);
    }

    public function simpan_postingan_edit(Request $request)
    {
        $request->validate([
            "id" => "required|exists:postingans,id",
            "kategori_id" => "required|exists:kategoris,id",
            "judul" => "required",
            "postingan" => "required"
        ]);

        $postingan = Postingan::find($request->id);
        $postingan->judul = $request->judul;
        $postingan->kategori_id = $request->kategori_id;
        $postingan->postingan = $request->postingan;
        $postingan->save();

        return redirect()->route("postingan.semua");
    }

    public function hapus(Postingan $postingan)
    {
        $postingan->delete();
    }
}
