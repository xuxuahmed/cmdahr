<?php

namespace App\Http\Controllers;

use App\checkinout;
use Illuminate\Http\Request;

class attendanceController extends Controller
{
    
        public function test($year,$uid)
    {
         $test1 =  checkinout::select ("*") 
                ->where ('checktime','LIKE','%'.$year.'%')
                ->where ('userid',$uid)
                ->get();   

        $test2 =  checkinout::select ("*") 
                ->where ('checktime','LIKE','%'.$year.'%')
                ->where ('userid',$uid)
                ->get(); 

        $test3 =  checkinout::select ("*") 
                ->where ('checktime','LIKE','%'.$year.'%')
                ->where ('userid',$uid)
                ->get();   

 return $a = [$test1,$test2,$test3];

  

    }



    public function filterYear($year,$uid)
    {
        return checkinout::select ("logid","checktime","sensorid","userno") 
                ->where ('checktime','LIKE','%'.$year.'%')
                ->where ('userno',$uid)
                ->get();        
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return checkinout::select ("*") 
                 
                ->limit(1000)
                ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\checkinout  $checkinout
     * @return \Illuminate\Http\Response
     */
    public function show(checkinout $checkinout)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\checkinout  $checkinout
     * @return \Illuminate\Http\Response
     */
    public function edit(checkinout $checkinout)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\checkinout  $checkinout
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, checkinout $checkinout)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\checkinout  $checkinout
     * @return \Illuminate\Http\Response
     */
    public function destroy(checkinout $checkinout)
    {
        //
    }
}
