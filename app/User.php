<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        // 'name', 'email', 'password', 'Ind_ID', 'RCN', 'PP_No', 'PPExpiry','Title','DhivehiTitle','Name', 
        // 'DhivehiName','PTele','MTele', 'ExtNo', 'DOB', 'Sex', 'ReID','CultureID', 'LogInName','AccBranch',
        // 'AccNo', 'AccType','AccName','AccBank','AccBankChg','AccTranser','LUpdateDt',
        // 'LUpdateUser','Paddress','PaddressD','CAddress','CAdressD','island','Atoll','Country','MachineID','login'
        // ,'updated','PhotoN','ApplyLate'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
