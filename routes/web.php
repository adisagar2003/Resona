<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SongController;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/postSong',function(){
    $user = Auth::user();
    return Inertia::render('Song/CreateSong',[
'user'=>$user
    ]);
})->middleware('auth');

Route::get('/dashboard', function () {

    $user = Auth::user();

    return Inertia::render('Dashboard',['user'=>$user]);
});

Route::get('/relation',function(){
    return Artist::find();
});

Route::get('/songs',[SongController::class,'index']);
Route::get('/songsMain',[SongController::class,'paginationShow']);
Route::post('/songs',[SongController::class,'create']);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
