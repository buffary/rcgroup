<?php

use think\facade\Route;

// 后台路由
Route::any('auth/login', 'Auth/login');

Route::group('', function () {

	Route::get('', 'Index/index');
	Route::get('index/index', 'Index/index');
	Route::get('index/home', 'Index/home');
	Route::get('auth/logout', 'Auth/logout');
	Route::post('auth/password', 'Auth/password');

	// 首页数据
	Route::any('home/index', 'Home/index');
	Route::any('home/edit', 'Home/edit');

	// 网站配置
	Route::any('config/index', 'Config/index');
	Route::post('config/edit', 'Config/edit');

	// 顶级导航
	Route::any('nav/index', 'Nav/index');
	Route::any('nav/edit', 'Nav/edit');
	Route::any('nav/status', 'Nav/status');

	// 二级导航
	Route::any('second/index', 'Second/index');
	Route::any('second/edit', 'Second/edit');
	Route::any('second/status', 'Second/status');

	// 新闻导航
	Route::any('news/index', 'News/index');
	Route::any('news/edit', 'News/edit');
	Route::any('news/status', 'News/status');

	// 案例管理
	Route::any('cases/index', 'Cases/index');
	Route::any('cases/show', 'Cases/show');
	Route::any('cases/edit', 'Cases/edit');
	Route::any('cases/delete', 'Cases/delete');

})->middleware(app\admin\middleware\CheckLogin::class);