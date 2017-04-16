<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Checkinout extends Model
{
    public $timestamps = false;
    protected $table = "checkinout";
    protected $primarykey = "logid";
}
