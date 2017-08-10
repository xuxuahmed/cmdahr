<?php

namespace App\Http\Controllers;

use App\postClass;
use Illuminate\Http\Request;

class postClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return postClass::select ("*")
                
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
     * @param  \App\postClass  $postClass
     * @return \Illuminate\Http\Response
     */
    public function show(postClass $postClass)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\postClass  $postClass
     * @return \Illuminate\Http\Response
     */
    public function edit(postClass $postClass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\postClass  $postClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, postClass $postClass)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\postClass  $postClass
     * @return \Illuminate\Http\Response
     */
    public function destroy(postClass $postClass)
    {
        //
    }
}
