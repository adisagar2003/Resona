<?php

namespace App\Http\Controllers;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     $models =Song::all();
    
    return $models;
    }

    public function paginationShow(){
        $models = Song::paginate(10);
        return $models; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->all();
        	echo($data[
                'songImage'
            ]);
            $path = Storage::putFile('public/images', $request->file('songImage'));
            

            $songPath = Storage::putFile('public/songs', $request->file('songFile'));
     Song::create([
        
        'songImagePath'=>$path,
        'artistName'=>$data['artistName'],
        'songName'=>$data['songName'],
        'artistId'=>$data['artistId'],
        'songPath'=>$songPath,
        'songImage'=>$data['songImage']

     ]);

     return Inertia::render('/Dashboard');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
