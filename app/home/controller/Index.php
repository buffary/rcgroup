<?php

namespace app\home\controller;

use app\home\service\HomeService;
use app\home\service\NavService;

/**
 * @desc    首页控制器
 * @author  BabyBuffary
 * @date    2020-08-18
 */
class Index extends Common
{
	public function index ()
	{
		// 幻灯片，目前获取pid为2
		$slideList  = NavService::get4IndexSlider();
		$homeConfig = HomeService::getConfig();

		return view('index', [
			'slideList'  => $slideList,
			'homeConfig' => $homeConfig,
		]);
	}
}