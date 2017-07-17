<?php

namespace App\Http\Controllers;

use App\desig;
use Illuminate\Http\Request;

class desigController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


  public function getService($Ind_ID)
    {
        return desig::select ("Ind_ID","AssignedDate","EndDate") 
            
                ->where ('Ind_id',$Ind_ID)
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
     * @param  \App\desig  $desig
     * @return \Illuminate\Http\Response
     */
    public function show(desig $desig)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\desig  $desig
     * @return \Illuminate\Http\Response
     */
    public function edit(desig $desig)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\desig  $desig
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, desig $desig)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\desig  $desig
     * @return \Illuminate\Http\Response
     */
    public function destroy(desig $desig)
    {
        //
    }
}
