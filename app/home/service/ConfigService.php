<?php

namespace app\home\service;

use app\common\helper\Image;
use app\common\helper\Tools;
use app\model\ConfigModel;
use think\facade\Cache;

/**
 * @desc    全站配置
 * @author  BabyBuffary
 * @date    2020-08-24
 */
class ConfigService
{
	/**
	 * 获取配置
	 */
	public static function make ()
	{
		$config = json_decode(Cache::get('config', null), true);

		if (null == $config) {
			// 从数据库中获取
			$config = ConfigModel::where('id', 1)->find()->toArray();
			Cache::set('config', json_encode($config));
		}


		$lang = Tools::lang();
		if ($lang == 'en-us') {
			return [
				'site_name'   => $config['site_name_en'],
				'favicon'     => Image::make($config['favicon']),
				'logo'        => Image::make($config['logo']),
				'keyword'     => $config['keyword_en'],
				'description' => $config['description_en'],
			];
		}

		return [
			'site_name'   => $config['site_name_cn'],
			'favicon'     => Image::make($config['favicon']),
			'logo'        => Image::make($config['logo']),
			'keyword'     => $config['keyword_cn'],
			'description' => $config['description_cn'],
		];
	}
}