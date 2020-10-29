<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResources  as ClientResources;

class ClientController extends Controller
{
      /**
     * Autocomplete when we search client
     * 
     * @param  \Illuminate\Http\Request  $request
     */
    public function searchClient(Request $request) {
        $clientSearch = $request->clientInfo;
        $listClient   = Client::where('surname', 'like', '%' . $clientSearch . '%')->orWhere('name', 'like', '%' . $clientSearch . '%')->get();
        return ClientResources::collection($listClient);
    }

}
