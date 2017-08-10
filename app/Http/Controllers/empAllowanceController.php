<?php

namespace App\Http\Controllers;

use App\empAllowance;
use Illuminate\Http\Request;

class empAllowanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function viewEmpAllowance($Ind_ID)
   {

        return empAllowance::select ("*") 
        -> where ('IndID',$Ind_ID)
        -> get();

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
     * @param  \App\empAllowance  $empAllowance
     * @return \Illuminate\Http\Response
     */
    public function show(empAllowance $empAllowance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\empAllowance  $empAllowance
     * @return \Illuminate\Http\Response
     */
    public function edit(empAllowance $empAllowance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\empAllowance  $empAllowance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, empAllowance $empAllowance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\empAllowance  $empAllowance
     * @return \Illuminate\Http\Response
     */
    public function destroy(empAllowance $empAllowance)
    {
        //
    }
}
