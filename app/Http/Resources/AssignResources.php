<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AssignResources extends JsonResource
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
            "id"         => $this->id,
            "client_id"  => $this->client_id,
            "desktop_id" => $this->desktop_id,
            "hours"      => $this->hours
        ];
    }
}
