<?php

namespace App\Http\Controllers;

use App\groupRoster;
use Illuminate\Http\Request;

class groupRosterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return groupRoster:: select ("*")
        -> get();
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
     * @param  \App\groupRoster  $groupRoster
     * @return \Illuminate\Http\Response
     */
    public function show(groupRoster $groupRoster)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\groupRoster  $groupRoster
     * @return \Illuminate\Http\Response
     */
    public function edit(groupRoster $groupRoster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\groupRoster  $groupRoster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, groupRoster $groupRoster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\groupRoster  $groupRoster
     * @return \Illuminate\Http\Response
     */
    public function destroy(groupRoster $groupRoster)
    {
        //
    }
}
