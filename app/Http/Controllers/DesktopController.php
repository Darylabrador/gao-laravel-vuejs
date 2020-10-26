<?php

namespace App\Http\Controllers;

use App\Models\Desktop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DesktopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $desktop = Desktop::paginate(3);
        return $desktop;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|min:4|unique:desktops',
            ],
            [
                'required' => 'Le champ :attribute est requis',
                'min' => '5 caractères minimums',
                'unique' => 'Poste existe déjà'
            ]
        );

        $errors = $validator->errors();

        if(count($errors) != 0) {
            return response()->json([
                'success' => false,
                'message' => $errors->first('name')
            ], 422);
        }

        Desktop::create($validator->validated());
        return response()->json([
            'success' => true,
            'message' => 'Poste créer'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|min:4|unique:desktops',
            ],
            [
                'required' => 'Le champ :attribute est requis',
                'min' => '5 caractères minimums',
                'unique' => 'Poste existe déjà'
            ]
        );

        $errors = $validator->errors();

        if (count($errors) != 0) {
            return response()->json([
                'success' => false,
                'message' => $errors->first('name')
            ], 422);
        }

        $desktop = Desktop::find($id);

        if($desktop == null) {
            return response()->json([
                'success' => false,
                'message' => "Poste introuvable"
            ], 422);
        }

        $desktop->name = $validator->validated()['name'];
        $desktop->save();

        return response()->json([
            'success' => true,
            'message' => 'Mise à jour effectuée'
        ],
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Desktop  $desktop
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $desktop = Desktop::find($id);

        if ($desktop == null) {
            return response()->json([
                    'success' => false,
                    'message' => "Poste introuvable"
                ], 
                422
            );
        }

        $desktop->delete();
        return response()->json(
            [
                'success' => true,
                'message' => 'Suppression effectuée'
            ],
            200
        );
    }
}
