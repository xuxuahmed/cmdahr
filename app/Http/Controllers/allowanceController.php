<?php

namespace App\Http\Controllers;

use App\allowance;
use Illuminate\Http\Request;

class allowanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function viewAllowance($id)
    {

        return allowance:: select ("*")
        -> where ('Allow_ID', $id)
        -> get();

    }
    public function index()
    {
        return allowance:: select ("*")
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
     * @param  \App\allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function show(allowance $allowance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function edit(allowance $allowance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, allowance $allowance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\allowance  $allowance
     * @return \Illuminate\Http\Response
     */
    public function destroy(allowance $allowance)
    {
        //
    }
}
