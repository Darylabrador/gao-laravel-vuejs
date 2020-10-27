<?php

namespace App\Http\Controllers;

use App\Http\Resources\AssignResources;
use App\Models\Assign;
use Illuminate\Http\Request;

class AssignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $assign = Assign::all();
      return AssignResources::collection($assign);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Assign  $assign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Assign $assign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Assign  $assign
     * @return \Illuminate\Http\Response
     */
    public function destroy(Assign $assign)
    {
        //
    }
}
