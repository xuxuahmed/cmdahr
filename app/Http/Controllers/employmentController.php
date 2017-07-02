<?php

namespace App\Http\Controllers;

use App\employment;
use Illuminate\Http\Request;

class employmentController extends Controller
{
    public function filterInd_ID($Ind_ID)
    {
        return employment::select ("*") 
                ->where ('Ind_ID',$Ind_ID)
                ->get();


                
    }



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return employment::select ("*") 
                 
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
     * @param  \App\employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function show(employment $employment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function edit(employment $employment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, employment $employment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function destroy(employment $employment)
    {
        //
    }
}
