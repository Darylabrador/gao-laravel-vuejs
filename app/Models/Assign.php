<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assign extends Model
{
    use HasFactory;

    protected $fillable = [
        'date', 'hours'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function clients()
    {
        return $this->belongsTo('App\Models\Client');
    }

    public function desktops()
    {
        return $this->belongsTo('App\Models\Desktop');
    }
}
