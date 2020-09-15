<?php

namespace app\admin\service;

use app\common\helper\Image;
use app\model\CaseModel;

/**
 * @desc    案例服务层
 * @author  BabyBuffary
 * @date    2020-08-29
 */
class CasesService
{

	/**
	 * 列表
	 * @param array $data
	 * @return array
	 */
	public static function getList (array &$data)
	{
		$dataList = [];
		$total    = CaseModel::count();
		$list     = CaseModel::limit(($data['page'] - 1) * $data['limit'], $data['limit'])
			->order('id', 'DESC')->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList) {
				$dataList[] = [
					'id'          => $item->id,
					'title_cn'    => $item->title_cn,
					'title_en'    => $item->title_en,
					'image'       => Image::make($item->image),
					'content_cn'  => $item->content_cn,
					'content_en'  => $item->content_en,
					'create_time' => $item->create_time,
					'url'         => config('app.app_host') . '/home/cases/' . $item->id,
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
			$model = CaseModel::where('id', $id)->find();
		}

		return [
			'id'         => $model->id ?? 0,
			'title_cn'   => $model->title_cn ?? '',
			'title_en'   => $model->title_en ?? '',
			'image'      => $model->image ?? '',
			'imageShow'  => Image::make($model->image ?? ''),
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
			CaseModel::update($data, ['id' => $id]);
		} else {
			CaseModel::create($data);
		}
		return ['code' => 1];
	}

	/**
	 * 删除
	 * @param int $id
	 * @return int[]
	 */
	public static function delete (int $id)
	{
		CaseModel::destroy($id);
		return ['code' => 1];
	}
}