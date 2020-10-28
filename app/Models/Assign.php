<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assign extends Model
{
    use HasFactory;

    protected $fillable = [
        'hours', 'date'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function clients()
    {
        return $this->belongsToMany('App\Models\Client', 'client_id', 'id');
    }

    public function desktops()
    {
        return $this->belongsToMany('App\Models\Desktop', 'desktop_id', 'id');
    }
}
