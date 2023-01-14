<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiAuthController extends Controller
{
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been succesfully logged out'];
        return response($response, 200);
    }

    public function whoiam()
    {
        return User::with('Student')->find(Auth::id());
    }
}
