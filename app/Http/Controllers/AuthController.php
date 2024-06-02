<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login_index() {
        if(auth()->check()){
            return redirect()->route("postingan.semua");
        }
        return inertia()->render("auth/LoginPage");
    }

    public function cek_login(Request $request) {
        $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        $auth = auth()->attempt($request->toArray());
        if($auth){
            return redirect()->route("postingan.semua");
        }
        return back()->withErrors(['login' => "Email Atau Password Salah."]);
    }

    public function logout() {
        auth()->logout();
    }
}
