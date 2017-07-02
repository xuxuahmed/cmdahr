<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('login');
});
Route::get('/', function () {
    return view('home2');
});

Route::resource('menus', 'MenuController');
Route::resource('ramadan', 'ramadanController');
Route::resource('workinghours', 'workingHoursController');
Route::resource( 'leaves', 'leavesController');
Route::resource( 'weekend', 'weekendsControler');
Route::resource( 'holiday', 'holidayController');
Route::resource( 'settings', 'settingsController');
Route::resource('individuals','IndividualController');
Route::resource('employment','employmentController');


Route::resource('checkinout','attendanceController');


Route::resource('education','EducationController');
Route::get('checkinout/{month?}/{year?}', [
    'as' => 'checkinout.index',
    'uses' => 'CheckinoutController@index'
]);
Route::get('getWorkingHours/{year}', [
    'as' => 'routeWorkingHours',
    'uses' => 'workingHoursController@filterYear'
]);


Route::get('getAttendanceYear/{year}/{uid}', [
    'as' => 'routeAttendanceYear',
    'uses' => 'attendanceController@filterYear'
]);

Route::get('getUser/{RCN?}', [
    'as' => 'routeUser',
    'uses' => 'IndividualController@filterRCN'
]);

Route::resource('checkinout', 'CheckinoutController', ['except' => ['index']]);

Route::get('getEmployment/{Ind_ID?}', [
    'as' => 'routeEmployment',
    'uses' => 'employmentController@filterInd_ID'
]);

Route::get('startMonth/{year}/{month}', [
    'as' => 'startMonthYear',
    'uses' => 'settingsController@startMonth'
]);

Route::get('test/{year}/{uid}', [
    'as' => 'testYear',
    'uses' => 'attendanceController@test'
]);

Route::get('weekendYear/{year}', [
    'as' => 'weekendcurrentYear',
    'uses' => 'weekendsControler@weekendYear'
]);

Route::get('isHoliday/{year}', [
    'as' => 'HolidaycurrentYear',
    'uses' => 'holidayController@isHoliday'
]);

Route::get('isLeave/{ind_ID}/{year}', [
    'as' => 'leavecurrentYear',
    'uses' => 'leavesController@isLeave'
]);


Route::get('getUser/{ind_ID}', [
    'as' => 'currentUser',
    'uses' => 'IndividualController@getUser'
]);

Route::get('workingHoursCat/{year}/{category}', [
    'as' => 'currentUserWorkingHours',
    'uses' => 'workingHoursController@workingHoursCat'
]);





Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
