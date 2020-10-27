<?php

namespace App\Http\Resources;

use App\Models\Assign;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'attributions' => Assign::all()
        ];
    }
}
