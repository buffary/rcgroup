<?php

namespace app\admin\service;

use app\common\helper\Image;
use app\model\HomeModel;
use think\facade\Cache;

/**
 * @desc    首页配置服务层
 * @author  BabyBuffary
 * @date    2020-08-22
 */
class HomeService
{
	/**
	 * 获取网站配置
	 * @return array
	 */
	public static function show ()
	{
		$model = HomeModel::where('id', 1)->find();

		return [
			'id'              => $model->id ?? 0,
			'title_cn'        => $model->title_cn ?? '',
			'title_en'        => $model->title_en ?? '',
			'company_cn'      => $model->company_cn ?? '',
			'company_en'      => $model->company_en ?? '',
			'brief_cn'        => $model->brief_cn ?? '',
			'brief_en'        => $model->brief_en ?? '',
			'brief_image'     => $model->brief_image ?? '',
			'brief_imageShow' => Image::make($model->brief_image ?? ''),
			'logos'           => $model->logos ?? '',
			'logosShow'       => Image::make($model->logos ?? ''),

			'num_award'     => $model->num_award ?? 0,
			'num_company'   => $model->num_company ?? 0,
			'num_turnover'  => $model->num_turnover ?? 0,
			'num_employees' => $model->num_employees ?? 0,
			'content_cn'    => $model->content_cn ?? '',
			'content_en'    => $model->content_en ?? '',
		];
	}

	/**
	 * 编辑
	 * @param array $data
	 * @return int[]
	 */
	public static function edit (array &$data)
	{
		Cache::delete('index_config');
		$model = HomeModel::where('id', 1)->find();
		if (null == $model) {
			// 新增
			HomeModel::create($data);
		} else {
			// 修改
			$model->save($data);
		}
		Cache::delete('index_config');
		return ['code' => 1];
	}
}