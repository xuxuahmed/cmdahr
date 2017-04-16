<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Individual;

class IndividualController extends Controller
{
     public function index()
    {        

        return Individual::where('RCN', '=', "163")                
                ->limit(1000)
                ->get();
    }

}
