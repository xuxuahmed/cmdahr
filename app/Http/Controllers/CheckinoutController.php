<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Individual;

class CheckinoutController extends Controller
{
    //
    public function index($month = null, $year = null)
    {
        $month = $month ? $month : date('m');
        $prevMonth = date('Y-m-d', strtotime("$year-$month-20 -1 months"));
        $year = $year ? $year : date('Y');

        $response = [];

        $records = Individual::where('RCN', '=', 163)->first()
                ->checkinouts()
                    ->where('checktime', '>', $prevMonth)
                    ->where('checktime', '<', "$year-$month-22")
                    ->get();

        foreach($records as $index => $record) {
            $date = date('Y-m-d', strtotime($record->checktime));
            $tempRecord['date'] = date('d M Y, D', strtotime($record->checktime));
            $tempRecord['duty-time'] = in_array(date('D', strtotime($record->checktime)), ["Fri", "Sat"]) ? '<< OFF >>' : '08:00 - 15:00';
            $tempRecord['penalty'] = 0.00;
            
            $tempRecord['in'] = array_key_exists($date, $response) ? $response[$date]['in'] : [];
            foreach($records->where('checktime', $record->checktime)->where('checktype', 'I') as $in) {
                $tempRecord['in'][] = date('H:i:s', strtotime($in->checktime));
            }
            
            $tempRecord['out'] = array_key_exists($date, $response) ? $response[$date]['out'] : [];
            foreach($records->where('checktime', $record->checktime)->where('checktype', 'O') as $out) {
                $tempRecord['out'][] = date('H:i:s', strtotime($out->checktime));
            }

            $response[$date] = $tempRecord;
        }

        return response()->json($response);
    }

}
