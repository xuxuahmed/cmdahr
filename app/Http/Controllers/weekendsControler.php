<?php

namespace App\Http\Controllers;

use App\weekend;
use Illuminate\Http\Request;




class weekendsControler extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function weekendYear($year)
{

   return weekend::select ("*") 
               ->where ('year',$year)
                ->get();

}


public function BtwWeekend($date1, $date2)
    {
                return weekend::select ('Day1','Day2','year') 
                ->wherebetween ('year', [$date1 ,$date2])             
                ->get(); 
    }

    public function index()
    {
        return weekend::select("*") 
                 
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
     * @param  \App\weekend  $weekend
     * @return \Illuminate\Http\Response
     */
    public function show(weekend $weekend)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\weekend  $weekend
     * @return \Illuminate\Http\Response
     */
    public function edit(weekend $weekend)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\weekend  $weekend
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, weekend $weekend)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\weekend  $weekend
     * @return \Illuminate\Http\Response
     */
    public function destroy(weekend $weekend)
    {
        //
    }
}
