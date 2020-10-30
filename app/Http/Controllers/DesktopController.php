<?php

namespace App\Http\Controllers;

use App\Http\Resources\DesktopResources;
use App\Models\Desktop;
use Illuminate\Http\Request;

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
}
