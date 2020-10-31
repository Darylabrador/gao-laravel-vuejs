<?php

namespace App\Http\Controllers;

use App\Models\Desktop;
use Illuminate\Http\Request;
use App\Http\Resources\DesktopResources;
use Illuminate\Support\Facades\Validator;

class DesktopController extends Controller
{
    /**
     * delete desktop 
     *
     */
    public function deleteDesktop($id)
    {
        Desktop::destroy($id);
        return response()->json([
            'success' => true,
            'message' => "Suppression réussie"
        ]);
    }

    
    /**
     * Update the specified desktop in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateDesktop(Request $request, $id)
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

        if ($desktop == null) {
            return response()->json([
                'success' => false,
                'message' => "Poste introuvable"
            ]);
        }

        $desktop->name = $validator->validated()['name'];
        $desktop->save();

        return response()->json([
            'success' => true,
            'message' => 'Mise à jour effectuée'
        ]);
    }
}
