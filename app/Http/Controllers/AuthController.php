<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    /**
     * Handle user connection
     * @param  \Illuminate\Http\Request  $request
     */
    public function postLogin(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required',
                'password' => 'required',
            ],
            [
                'required' => 'Le champ :attribute est requis',
            ]
        );

        $errors = $validator->errors();

        if (count($errors) != 0) {
            return response()->json([
                'success' => false,
                'message' => $errors->first()
            ]);
        }

        $
        return response()->json([
            'success' => true,
            'message' => "test"
        ]);
    }
    
}
