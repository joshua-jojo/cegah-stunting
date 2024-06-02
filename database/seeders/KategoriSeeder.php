<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nama_kategori = [
            "PENGENALAN",
            "PERAN ANDA : KELUARGA",
            "PERAN ANDA : PEMERINTAH",
            "PERAN ANDA : PUBLIK",
            "BERITA : PUSAT",
            "BERITA : DAERAH",
            "BERITA : PERS"
        ];

        foreach ($nama_kategori as $key => $value) {
            $kategori = new Kategori();
            $kategori->nama = $value;
            $kategori->save();
        }
    }
}
