<?php

namespace App\Http\Resources;

use App\Models\Assign;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class DesktopResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'attributions' =>  DB::table('assigns')->leftJoin('clients', 'assigns.client_id', '=', 'clients.id')->where('assigns.desktop_id', $this->id)->get(['clients.id as idClient', 'clients.name as prenom', 'clients.surname as nom', 'assigns.hours as heure', 'assigns.id as idAssign']),
        ];
    }
}
