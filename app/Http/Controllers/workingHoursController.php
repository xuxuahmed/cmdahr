<?php

namespace App\Http\Controllers;

use App\working_hours;
use Illuminate\Http\Request;

class workingHoursController extends Controller
{


     public function workingHoursCat($year,$category)
    {
        return working_hours::select ("*") 
                ->where ("year",$year)
                ->where("category",$category)
                ->get();
    }

        public function filterYear($year)
    {
        return working_hours::select ("*") 
                ->where ("year",$year)
                ->get();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return working_hours::select ("*") 
                 
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
     * @param  \App\working_hours  $working_hours
     * @return \Illuminate\Http\Response
     */
    public function show(working_hours $working_hours)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\working_hours  $working_hours
     * @return \Illuminate\Http\Response
     */
    public function edit(working_hours $working_hours)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\working_hours  $working_hours
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, working_hours $working_hours)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\working_hours  $working_hours
     * @return \Illuminate\Http\Response
     */
    public function destroy(working_hours $working_hours)
    {
        //
    }
}
