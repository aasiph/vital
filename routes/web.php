<?php

use App\Http\Controllers\Auth\SecurityController;
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
    Route::inertia('/services', 'landing/Services')->name('services');

    Route::get('/error/{status?}', function (?int $status = 0) {
        return Inertia::render('Error', [
            'status' => $status,
        ]);
    })->whereIn('status', [400, 403, 404, 419, 500, 503]) // Optional: restricts to valid error codes
    ->name('error');
});

Route::name('ui.')->prefix('components/ui')->group(function () {
    Route::inertia('/component', 'UiComponent')->name('component');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::inertia('/pages/{page}', 'Page')->name('pages.show');
    Route::inertia('/navmenu/{level}', 'MenuLevel')->name('navmenu.show');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::put('/profile/password', [SecurityController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');
});
