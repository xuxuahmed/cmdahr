<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ramadan_wh;

class ramadan_wh_ctrl extends Controller
{
     public function index()
    {
       return ramadan_wh::where('id', '=', "1") 

                 
                ->limit(1000)
                ->get();
    }


}
