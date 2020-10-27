<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DesktopController;
use App\Http\Controllers\AssignController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("computers", DesktopController::class)->except(['show']);

Route::apiResource("clients", ClientController::class)->only(['index', 'store', 'destroy']);

Route::apiResource("assigns", AssignController::class)->only(['index', 'store', 'update', 'destroy' ]);