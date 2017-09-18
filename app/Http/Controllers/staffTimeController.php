<?php

namespace App\Http\Controllers;

use App\staffTime;
use DB;
use Illuminate\Http\Request;

class staffTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

public function countInOut ($ind_id, $date1)
{


    return staffTime::groupby('Signing_DT')
     ->having( 'IndID','=',$ind_id)
     ->where ('Signing_DT','LIKE','%'.$date1.'%')
     ->having ('btn_Status','=',1)              
     ->get();

}

public function getStaffInOut ($ind_id, $date1)
{


    return staffTime::groupby('Signing_DT')
     ->having( 'IndID','=',$ind_id)
     ->where ('Signing_DT','LIKE','%'.$date1.'%')                 
     ->get();

}


  public function btwAttendance($RCN,$date1,$date2)
    {
      
    
        return staffTime::select ('Signing_ID','Signing_DT','CDT','btn_Status','IndID') 
                ->wherebetween ('Signing_DT', [$date1 ,$date2])
                ->where ('IndID',$RCN)
                ->get();  
    }


    public function filterYear($year,$IndID)
    {
        return staffTime::select ('Signing_ID','Signing_DT','btn_Status','IndID') 
                ->where ('Signing_DT','LIKE','%'.$year.'%')
                ->where ('IndID',$IndID)
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
     * @param  \App\staffTime  $staffTime
     * @return \Illuminate\Http\Response
     */
    public function show(staffTime $staffTime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\staffTime  $staffTime
     * @return \Illuminate\Http\Response
     */
    public function edit(staffTime $staffTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\staffTime  $staffTime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, staffTime $staffTime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\staffTime  $staffTime
     * @return \Illuminate\Http\Response
     */
    public function destroy(staffTime $staffTime)
    {
        //
    }
}
