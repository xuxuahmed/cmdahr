<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
   protected $table = "Individual";
        protected $fillable =array('id','name','email','contact_number','position');

}
