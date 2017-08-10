<?php

namespace App\Http\Controllers;

use App\chitAllowance;
use Illuminate\Http\Request;

class chitAllowanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function chitAllowanceInd($Ind_ID)
    {
         return chitAllowance::select ("*") 
            
                ->where ('indid',$Ind_ID)
                ->get();   
    }


    public function index()
    {
        //
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
     * @param  \App\chitAllowance  $chitAllowance
     * @return \Illuminate\Http\Response
     */
    public function show(chitAllowance $chitAllowance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\chitAllowance  $chitAllowance
     * @return \Illuminate\Http\Response
     */
    public function edit(chitAllowance $chitAllowance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\chitAllowance  $chitAllowance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, chitAllowance $chitAllowance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\chitAllowance  $chitAllowance
     * @return \Illuminate\Http\Response
     */
    public function destroy(chitAllowance $chitAllowance)
    {
        //
    }
}
