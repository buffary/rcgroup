<?php

namespace app\admin\controller;

use app\BaseController;

/**
 * @desc    后台首页控制器
 * @author  BabyBuffary
 * @date    2020-08-18
 */
class Index extends BaseController
{
	public function index ()
	{
		return view('index');
	}

	public function home ()
	{
		return view('home');
	}
}