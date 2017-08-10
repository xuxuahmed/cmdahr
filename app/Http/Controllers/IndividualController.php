<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Individual;

class IndividualController extends Controller
{
     public function getUser($rcd_no)
    {

        return Individual::select ("*") 
                ->where ("RCN",$rcd_no)
                ->get();
    }

     public function viewUser($rcd_no)
    {

        return Individual::select ("*") 
                ->where ("RCN",$rcd_no)
                                
                ->get();
    }


   public function index()
    {        

        return Individual::where('RCN', '=', "109")                
                ->limit(1000)
                ->get();
               
    }

    public function filterRCN($rcd_no)
    {

    	return Individual::select ("*") 
                ->where ("RCN",$rcd_no)
                ->get();
    }

}
