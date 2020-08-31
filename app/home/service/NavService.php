<?php

namespace app\home\service;

use app\common\helper\Image;
use app\model\NavModel;
use think\facade\Cache;
use think\facade\Lang;

/**
 * @desc    导航服务层
 * @author  BabyBuffary
 * @date    2020-08-27
 */
class NavService
{
	/**
	 * 列表
	 */
	public static function getList ()
	{
		$lang    = Lang::getLangSet();
		$navList = json_decode(Cache::get('navList', null), true);
		if (null == $navList) {
			// 从数据库中获取
			$list = NavModel::where('status', 1)
				->field(['id', 'pid', 'name_cn', 'name_en', 'template'])
				->order('pid', 'AES')->order('sort', 'AES')
				->select();

			// 处理成树结构
			if (!$list->isEmpty()) {
				$list->each(function ($item) use (&$navList) {
					$itemArrEn = [
						'id'       => $item->id,
						'name'     => $item->name_en,
						'template' => $item->template,
					];
					$itemArrCn = [
						'id'       => $item->id,
						'name'     => $item->name_cn,
						'template' => $item->template,
					];

					if ($item->pid == 0) {
						$navList['en'][$item->id] = $itemArrEn;
						$navList['cn'][$item->id] = $itemArrCn;
					} else {
						$navList['en'][$item->pid]['child'][] = $itemArrEn;
						$navList['cn'][$item->pid]['child'][] = $itemArrCn;
					}
				});
			}

			$navList['en'] = array_values($navList['en']);
			$navList['cn'] = array_values($navList['cn']);

			Cache::set('navList', json_encode($navList));
		}
		
		return $lang == 'en-us' ? $navList['en'] : $navList['cn'];
	}

	/**
	 * 获取首页轮播图
	 * @return array
	 */
	public static function get4IndexSlider ()
	{
		$dataList = [];
		$lang     = Lang::getLangSet();
		$list     = NavModel::where('pid', 2)
			->field(['id', 'name_cn', 'name_en', 'title_cn', 'title_en', 'image'])
			->order('sort', 'AES')
			->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList, $lang) {
				$pathinfo = pathinfo($item->image);
				$image    = $pathinfo['dirname'] . '/' . $pathinfo['filename'] . '_800.' . $pathinfo['extension'];
				if ($lang == 'en-us') {
					$dataList[] = [
						'id'    => $item->id,
						'name'  => $item->name_en,
						'title' => $item->name_en,
						'image' => Image::make($image),
					];
				} else {
					$dataList[] = [
						'id'    => $item->id,
						'name'  => $item->name_cn,
						'title' => $item->title_cn,
						'image' => Image::make($image),
					];
				}
			});
		}
		return $dataList;
	}
}