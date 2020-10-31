<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Desktop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Resources\DesktopResources as DesktopResources;

class GeneralController extends Controller
{
    /**
     * Display a listing of the desktop.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll(Request $request)
    {
        $dateNow = $request->date;

        $desktop = Desktop::with(array('assigns' => function ($query) use ($dateNow) {
            $query->where('date', $dateNow);
        }))->paginate(3);

        return DesktopResources::collection($desktop);
    }


    /**
     * Store a newly created desktop in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createDesktop(Request $request)
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
        $desktop = new DesktopResources($desktop);
        
        return response()->json([
            'success' => true,
            'message' => 'Poste créer',
            'desktop' =>  $desktop
        ], 200);
    }
}