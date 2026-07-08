<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('landing/Welcome', [
        'canLogin'    => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::name('pages.')->prefix('pages')->group(function () {
    Route::inertia('/about', 'About')->name('about');

    Route::inertia('/error', 'Error', ['status' => 0])->name('error');
    Route::inertia('/error400', 'Error', ['status' => 400])->name('error400');
    Route::inertia('/error403', 'Error', ['status' => 403])->name('error403');
    Route::inertia('/error404', 'Error', ['status' => 404])->name('error404');
    Route::inertia('/error500', 'Error', ['status' => 500])->name('error500');
});

Route::name('ui.')->prefix('components/ui')->group(function () {
    Route::inertia('/component', 'UiComponent')->name('component');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::inertia('/pages/pageone', 'Page')->name('pages.pageone');
    Route::inertia('/pages/pagetwo', 'Page')->name('pages.pagetwo');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
