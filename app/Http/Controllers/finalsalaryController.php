<?php

namespace App\Http\Controllers;

use App\finalsalary;
use Illuminate\Http\Request;

class finalsalaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function sumAmount($salID,$RCN)    {

             

         
               $t = finalsalary::select('salID','RCN',finalsalary::raw('SUM(Amount) as total'))
              ->where ("salID",$salID)
               ->where ("RCN",$RCN)
                ->get();
                return $t;

           
          
              
    }

    public function checkExists($salID,$RCN) // Check Salary ID Exists
    {
       return finalsalary::select ("*") 
               ->where ("salID",$salID)
               ->where ("RCN",$RCN)
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
     * @param  \App\finalsalary  $finalsalary
     * @return \Illuminate\Http\Response
     */
    public function show(finalsalary $finalsalary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\finalsalary  $finalsalary
     * @return \Illuminate\Http\Response
     */
    public function edit(finalsalary $finalsalary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\finalsalary  $finalsalary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, finalsalary $finalsalary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\finalsalary  $finalsalary
     * @return \Illuminate\Http\Response
     */
    public function destroy(finalsalary $finalsalary)
    {
        //
    }
}
