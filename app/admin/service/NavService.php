<?php

namespace app\admin\service;

use app\common\helper\Image;
use app\model\NavModel;
use think\facade\Cache;

/**
 * @desc    菜单服务层
 * @author  BabyBuffary
 * @date    2020-08-21
 */
class NavService
{

	/**
	 * 列表
	 * @param array $data
	 * @return array
	 */
	public static function getList (array &$data)
	{
		$dataList = [];
		$total    = NavModel::count();
		$list     = NavModel::where('pid', $data['pid'])
			->limit(($data['page'] - 1) * $data['limit'], $data['limit'])
			->order('sort', 'AES')
			->order('id', 'DESC')->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList) {
				$dataList[] = [
					'id'          => $item->id,
					'name_cn'     => $item->name_cn,
					'name_en'     => $item->name_en,
					'title_cn'    => $item->title_cn,
					'title_en'    => $item->title_en,
					'template'    => $item->template,
					'image'       => Image::make($item->image),
					'sort'        => $item->sort,
					'status'      => $item->status,
					'content_cn'  => $item->content_cn,
					'content_en'  => $item->content_en,
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
			$model = NavModel::where('id', $id)->find();
		}

		return [
			'id'         => $model->id ?? 0,
			'pid'        => $model->pid ?? 0,
			'name_cn'    => $model->name_cn ?? '',
			'name_en'    => $model->name_en ?? '',
			'title_cn'   => $model->title_cn ?? '',
			'title_en'   => $model->title_en ?? '',
			'template'   => $model->template ?? '',
			'image'      => $model->image ?? '',
			'imageShow'  => Image::make($model->image ?? ''),
			'sort'       => $model->sort ?? '',
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
		Cache::delete('navList');
		if ($id) {
			NavModel::update($data, ['id' => $id]);
		} else {
			NavModel::create($data);
		}

		Cache::delete('navList');
		return ['code' => 1];
	}

	/**
	 * 获取顶级列表
	 * @return array
	 */
	public static function getTopList ()
	{
		$dataList = [];
		$list     = NavModel::where(['pid' => 0, 'status' => 1])
			->order('sort', 'AES')->field(['id', 'name_cn'])->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList) {
				$dataList[] = [
					'id'   => $item->id,
					'name' => $item->name_cn,
				];
			});
		}
		return $dataList;
	}
}