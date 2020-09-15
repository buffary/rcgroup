<?php

namespace app\home\widget;

use app\BaseController;
use app\common\helper\Image;
use app\common\helper\Tools;
use app\model\NewsModel;
use think\facade\View;

/**
 * @desc    新闻部件
 * @author  BabyBuffary
 * @date    2020-08-30
 */
class News extends BaseController
{
	public function make ()
	{
		$dataList = [];
		$lang     = Tools::lang();

		$list = NewsModel::where('status', 1)
			->order('id', 'DESC')
			->field(['id', 'title_cn', 'title_en', 'thumb', 'digest_cn', 'digest_en'])
			->limit(20)
			->select();

		if (!$list->isEmpty()) {
			$list->each(function ($item) use (&$dataList, $lang) {
				if ($lang == 'en-us') {
					$dataList[] = [
						'id'     => $item->id,
						'title'  => $item->title_en,
						'thumb'  => Image::make($item->thumb),
						'digest' => $item->digest_en,
					];
				} else {
					$dataList[] = [
						'id'     => $item->id,
						'title'  => $item->title_cn,
						'thumb'  => Image::make($item->thumb),
						'digest' => $item->digest_cn,
					];
				}
			});
		}

		$html = View::fetch('news/index', [
			'newsList' => $dataList,
		]);

		return $html;
	}
}