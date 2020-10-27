<?php

namespace App\Http\Controllers;

use App\Models\Desktop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Resources\DesktopResources as DesktopResources;

class DesktopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $desktop = Desktop::paginate(3);
        $desktop = Desktop::all();
        return DesktopResources::collection($desktop);
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
            ]);
        }

        $desktop = Desktop::create($validator->validated());
        return response()->json([
            'success' => true,
            'message' => 'Poste créer',
            'desktop' =>  DesktopResources::collection($desktop)
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
            ]);
        }

        $desktop = Desktop::find($id);

        if($desktop == null) {
            return response()->json([
                'success' => false,
                'message' => "Poste introuvable"
            ]);
        }

        $desktop->name = $validator->validated()['name'];
        $updateDesktop = $desktop->save();

        return response()->json([
            'success' => true,
            'message' => 'Mise à jour effectuée',
            'desktop' =>  DesktopResources::collection($updateDesktop)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $desktop = Desktop::find($id);

        if ($desktop == null) {
            return response()->json([
                    'success' => false,
                    'message' => "Poste introuvable"
                ]);
        }

        $desktop->delete();
        return response()->json(
            [
                'success' => true,
                'message' => 'Suppression effectuée'
            ]);
    }
}