<?php

namespace MyTapp\Http\Middleware;

use Closure;

class Authorizer
{

    public function handle($request, Closure $next)
    {
    	if( \Auth::guest() && !$request->is(['login', 'register'])) {
            return redirect('/login');
        }

        return $next($request);
    }
}
