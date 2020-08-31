<?php

namespace app\home\widget;

use app\BaseController;
use app\common\helper\Image;
use app\model\NavModel;
use think\facade\Lang;
use think\facade\View;

/**
 * @desc    二级导航小部件
 * @author  BabyBuffary
 * @date    2020-08-31
 */
class Second extends BaseController
{
	public function make (array $data)
	{
		$dataList = [];
		$lang     = Lang::getLangSet();
		$list     = NavModel::where(['pid' => $data['id'], 'status' => 1])
			->field(['id', 'name_cn', 'name_en', 'image'])
			->order('sort', 'AES')
			->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList, $lang) {
				if ($lang == 'en-us') {
					$dataList[] = [
						'id'    => $item->id,
						'name'  => $item->name_en,
						'image' => Image::make($item->image),
					];
				} else {
					$dataList[] = [
						'id'    => $item->id,
						'name'  => $item->name_cn,
						'image' => Image::make($item->image),
					];
				}
			});
		}

		$html = View::fetch('second/index', [
			'secondList' => $dataList,
		]);

		return $html;
	}
}