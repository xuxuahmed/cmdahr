<?php

namespace App\Http\Controllers;

use App\salarymonths;
use Illuminate\Http\Request;

class salarymonthsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function salByMonths($date)
    {
         return salarymonths::select ('SalMonthID','SalMonthStartDate') 
                ->where ('SalMonthStartDate','LIKE','%'.$date.'%')           
                ->get();

    }

    public function index()
    {
         return salarymonths::select ("*") 
                 
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
     * @param  \App\salarymonths  $salarymonths
     * @return \Illuminate\Http\Response
     */
    public function show(salarymonths $salarymonths)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\salarymonths  $salarymonths
     * @return \Illuminate\Http\Response
     */
    public function edit(salarymonths $salarymonths)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\salarymonths  $salarymonths
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, salarymonths $salarymonths)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\salarymonths  $salarymonths
     * @return \Illuminate\Http\Response
     */
    public function destroy(salarymonths $salarymonths)
    {
        //
    }
}
