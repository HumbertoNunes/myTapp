<?php

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

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', function(){
	return redirect('/');
});

Route::get('/users/{user}/edit', 'UserController@edit');

Route::patch('/users/{user}', 'UserController@update');

Route::delete('/users/{user}', 'UserController@destroy');
