<?php

use think\facade\Route;

// 前台路由
Route::get('/', 'Index/index');
Route::get('nav/:id', 'Nav/detail');
Route::get('second/:id', 'Second/detail');
Route::post('contact/create', 'Contact/create');
Route::get('news/:id', 'News/detail');
Route::get('cases/:id', 'Cases/index');