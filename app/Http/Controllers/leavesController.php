<?php

namespace App\Http\Controllers;

use App\leaves;
use Illuminate\Http\Request;

class leavesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function countLeaves($ind_ID,$date1,$date2,$id)
    {

        return leaves::groupby('LFromDT')    
              ->wherebetween ('LFromDT', [$date1 ,$date2])
                ->where ('IndID',$ind_ID)
              ->where('LPolicyID',$id)
                ->get(); 
    }

    
    

  public function LeaveBtw($ind_ID,$date1,$date2)
    {

        return leaves::select ('LID','IndID','LFromDT','LToDT','LPolicyID','LDesc','DesigID') 
                ->wherebetween ('LFromDT', [$date1 ,$date2])
                ->where ('IndID',$ind_ID)          
                ->get(); 
    }

    public function isLeave($ind_ID,$year)
    {

        return leaves::select ('LID','IndID','LFromDT','LToDT','LPolicyID','LDesc','DesigID') 
                ->where ('LFromDT','LIKE','%'.$year.'%')
                ->where ('LToDt','LIKE','%'.$year.'%')
                ->where ('IndID',$ind_ID)
                ->get(); 
    }

    public function isLeaveInd($ind_ID)
    {

        return leaves::select ('LID','IndID','LFromDT','LToDT','LPolicyID','LDesc','DesigID')
                ->where ('IndID',$ind_ID)
                ->get(); 
    }


    public function index()
    {
        return leaves::select ("*") 
                 
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
     * @param  \App\leaves  $leaves
     * @return \Illuminate\Http\Response
     */
    public function show(leaves $leaves)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\leaves  $leaves
     * @return \Illuminate\Http\Response
     */
    public function edit(leaves $leaves)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\leaves  $leaves
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, leaves $leaves)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\leaves  $leaves
     * @return \Illuminate\Http\Response
     */
    public function destroy(leaves $leaves)
    {
        //
    }
}
