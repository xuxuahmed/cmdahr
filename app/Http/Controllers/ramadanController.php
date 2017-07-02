<?php

namespace App\Http\Controllers;

use App\ramadan;
use Illuminate\Http\Request;

class ramadanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ramadan::select ("*") 
                 
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
     * @param  \App\ramadan  $ramadan
     * @return \Illuminate\Http\Response
     */
    public function show(ramadan $ramadan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ramadan  $ramadan
     * @return \Illuminate\Http\Response
     */
    public function edit(ramadan $ramadan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ramadan  $ramadan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ramadan $ramadan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ramadan  $ramadan
     * @return \Illuminate\Http\Response
     */
    public function destroy(ramadan $ramadan)
    {
        //
    }
}
