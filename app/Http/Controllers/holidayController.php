<?php

namespace App\Http\Controllers;

use App\holiday;
use Illuminate\Http\Request;

class holidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


  public function newHoliday($date,$reason)
    {
        
     return holiday::all();
        $date = Input::get('HolidayDate');
        $reason = Input::get('HolidayReason');

        $create = holiday::create(array(
            'HolidayDate' => $date,
            'HolidayReason' => $reason
        ));       
    }


    public function isHoliday($year)
    {
        return holiday::select ("*") 
                ->where ('HolidayDate','LIKE','%'.$year.'%')
                ->get();
    }

    public function index()
    {
        return holiday::select ("*") 
                 
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
     * @param  \App\holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function show(holiday $holiday)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function edit(holiday $holiday)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, holiday $holiday)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function destroy(holiday $holiday)
    {
        //
    }
}
