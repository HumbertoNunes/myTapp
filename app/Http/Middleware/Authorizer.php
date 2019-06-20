<?php

namespace MyTapp\Http\Middleware;

use Closure;

class Authorizer
{

    public function handle($request, Closure $next)
    {
    	if( (!\Request::path('login') || !\Request::path('register')) && \Auth::guest()) {
            return redirect('/login');
        }

        return $next($request);
    }
}
