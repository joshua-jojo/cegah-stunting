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
        $nama_kategori = ["IBU", "AYAH", "KELUARGA"];

        foreach ($nama_kategori as $key => $value) {
            $kategori = new Kategori();
            $kategori->nama = $value;
            $kategori->save();
        }
    }
}
