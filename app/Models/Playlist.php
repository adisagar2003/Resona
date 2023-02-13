<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;
    function belongUser(){
        return $this->belongsTo(User::class);
    }

    function getSongs(){
        return $this->hasMany('App\Models\Song');
    }

}
