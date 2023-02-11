<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{

    public function uploadImage(Request $request)
    {
        $path = Storage::putFile('image', $request->image);
        return response()->json(['path' => $path]);
    }
    public function getImage($path)
    {
        $image = Storage::get($path);
        return response($image, 200)->header('Content-Type', Storage::getMimeType($path));
    }
    //
}
