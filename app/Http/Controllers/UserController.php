<?php

namespace MyTapp\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Auth\User;

class UserController extends Controller
{
	public function edit(User $user)
	{
		if($user->id === \Auth::user()->id)
			return view('user.edit', compact('user'));
		

		return redirect('/');
	}

	public function update(User $user, Request $request)
	{
		 $validatedData = $request->validate([
	     	'name' => [
	     		'required',
	     		'string',
	     		'max:255',
	     		 Rule::unique('users')->ignore($user->id)
	     		],

	     	'email' => [
	     		'required',
	     		'string',
	     		'email',
	     		'max:255',
	     		Rule::unique('users')->ignore($user->id)
	     	],

	     	'password' => 'min:8'

	     ]);

		$user->name = $request->name;
		$user->email = $request->email;
		$user->password = bcrypt($request->password);

		$user->save();

		return back()->with('message', 'Dados atualizados.');
	}

    public function destroy(User $user)
    {
    	if($user->id === \Auth::user()->id) {
         	$user->delete();
         	session()->flash('message', 'Usuário removido.');
    	}


        return redirect('/login');
    }
}
