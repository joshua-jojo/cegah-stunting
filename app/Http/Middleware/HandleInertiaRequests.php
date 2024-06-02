<?php

namespace App\Http\Middleware;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            "dashboard" => [
                "berita" => Kategori::query()
                    ->select(["id", 'nama'])
                    ->where("nama", 'like', 'berita%')
                    ->get()
                    ->map(function ($q) {
                        $nama = str_replace("BERITA :", "", $q->nama);
                        $q->nama = trim($nama);
                        return $q;
                    }),
                "peran" => Kategori::query()
                    ->select(["id", 'nama'])
                    ->where("nama", 'like', 'peran anda%')
                    ->get()
                    ->map(function ($q) {
                        $nama = str_replace("PERAN ANDA :", "", $q->nama);
                        $q->nama = trim($nama);
                        return $q;
                    }),
                "edukasi" => Kategori::where("nama",'edukasi')->first()?->postingan
            ]
        ]);
    }
}
