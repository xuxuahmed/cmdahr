<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\education;

class EducationController extends Controller
{ 
	public function index()
    { 
   		return education::where('RCN', '=', "163")                
                ->limit(1000)
                ->get();
     }
}
