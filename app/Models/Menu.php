<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    //Function for submenu
    public function submenus()
    {
        return $this->hasMany('App\Models\Submenu');
    }
}
