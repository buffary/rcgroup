<?php

namespace app\home\controller;

use app\common\helper\Image;
use app\common\helper\Tools;
use app\model\NewsModel;

/**
 * @desc    新闻控制器
 * @author  BabyBuffary
 * @date    2020-08-31
 */
class News extends Common
{
	public function detail ($id)
	{
		$model = NewsModel::where('id', $id)->find();
		if (null == $model) {
			return redirect('/');
		}

		$lang = Tools::lang();
		if ($lang == 'en-us') {
			$data = [
				'id'      => $model->id,
				'name'    => $model->name_en,
				'title'   => $model->title_en,
				'image'   => Image::make($model->image),
				'content' => $model->content_en,
			];
		} else {
			$data = [
				'id'      => $model->id,
				'name'    => $model->name_cn,
				'image'   => Image::make($model->image),
				'title'   => $model->title_cn,
				'content' => $model->content_cn,
			];
		}

		return view('detail', ['data' => $data]);
	}
}