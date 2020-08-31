<?php

namespace app\admin\service;

use app\common\helper\Image;
use app\model\ConfigModel;
use think\facade\Cache;

/**
 * @desc    网站配置服务层
 * @author  BabyBuffary
 * @date    2020-08-22
 */
class ConfigService
{

	/**
	 * 获取网站配置
	 * @return array
	 */
	public static function show ()
	{
		$model = ConfigModel::where('id', 1)->find();

		return [
			'id'             => $model->id ?? 0,
			'logo'           => $model->logo ?? '',
			'logoShow'       => Image::make($model->logo ?? ''),
			'favicon'        => $model->favicon ?? '',
			'faviconShow'    => Image::make($model->favicon ?? ''),
			'site_name_cn'   => $model->site_name_cn ?? '',
			'site_name_en'   => $model->site_name_en ?? '',
			'keyword_cn'     => $model->keyword_cn ?? '',
			'keyword_en'     => $model->keyword_en ?? '',
			'description_cn' => $model->description_cn ?? '',
			'description_en' => $model->description_en ?? '',
			'address_cn'     => $model->address_cn ?? '',
			'address_en'     => $model->address_en ?? '',
			'mobile'         => $model->mobile ?? '',
			'email'          => $model->email ?? '',
		];
	}

	/**
	 * 编辑
	 * @param array $data
	 * @return int[]
	 */
	public static function edit (array &$data)
	{
		Cache::delete('config');
		$model = ConfigModel::where('id', 1)->find();
		if (null == $model) {
			// 新增
			ConfigModel::create($data);
		} else {
			// 修改
			$model->save($data);
		}
		Cache::delete('config');
		return ['code' => 1];
	}
}