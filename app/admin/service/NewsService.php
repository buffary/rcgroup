<?php

namespace app\admin\service;

use app\common\helper\Image;
use app\model\NewsModel;

/**
 * @desc    新闻服务层
 * @author  BabyBuffary
 * @date    2020-08-29
 */
class NewsService
{

	/**
	 * 等级列表
	 * @param array $data
	 * @return array
	 */
	public static function getList (array &$data)
	{
		$dataList = [];
		$total    = NewsModel::count();
		$list     = NewsModel::limit(($data['page'] - 1) * $data['limit'], $data['limit'])
			->order('id', 'DESC')->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList) {
				$dataList[] = [
					'id'          => $item->id,
					'title_cn'    => $item->title_cn,
					'title_en'    => $item->title_en,
					'thumb'       => Image::make($item->thumb),
					'image'       => Image::make($item->image),
					'digest_cn'   => $item->digest_cn,
					'digest_en'   => $item->digest_en,
					'status'      => $item->status,
					'create_time' => $item->create_time,
				];
			});
		}

		return [
			'code'  => 0,
			'count' => $total,
			'data'  => $dataList,
		];
	}


	public static function show (int $id)
	{
		if ($id) {
			$model = NewsModel::where('id', $id)->find();
		}

		return [
			'id'         => $model->id ?? 0,
			'title_cn'   => $model->title_cn ?? '',
			'title_en'   => $model->title_en ?? '',
			'thumb'      => $model->thumb ?? '',
			'thumbShow'  => Image::make($model->thumb ?? ''),
			'image'      => $model->image ?? '',
			'imageShow'  => Image::make($model->image ?? ''),
			'digest_cn'  => $model->digest_cn ?? '',
			'digest_en'  => $model->digest_en ?? '',
			'content_cn' => $model->content_cn ?? '',
			'content_en' => $model->content_en ?? '',
		];
	}


	/**
	 * 编辑
	 * @param int   $id
	 * @param array $data
	 * @return int[]
	 */
	public static function edit (int $id, array &$data)
	{
		if ($id) {
			NewsModel::update($data, ['id' => $id]);
		} else {
			NewsModel::create($data);
		}
		return ['code' => 1];
	}
}