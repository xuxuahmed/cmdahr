<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Individual extends Model
{
    public $timestamps = false;
    protected $table = "individuals";
    protected $primarykey = "indID";

    public function checkinouts() {
        return $this->hasMany(Checkinout::class, 'userno', 'RCN');
    }
}
