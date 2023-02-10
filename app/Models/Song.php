<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'songImagePath',
        'artistName',
        'songPath',
        'songName',
        'artistId',
        'song'
    
    ];

    function userParent(){
        return $this->belongsTo(User::class,'id');

    }

}
