<?php

namespace app\home\controller;

use app\common\helper\Image;
use app\common\helper\Tools;
use app\model\NavModel;

/**
 * @desc    导航控制器
 * @author  BabyBuffary
 * @date    2020-08-29
 */
class Nav extends Common
{
	public function detail ($id)
	{
		$model = NavModel::where('id', $id)->find();
		if (null == $model) {
			return redirect('/');
		}

		$lang = Tools::lang();
		if ($lang == 'en-us') {
			$data = [
				'id'      => $model->id,
				'pid'     => $model->pid,
				'name'    => $model->name_en,
				'title'   => $model->title_en,
				'image'   => Image::make($model->image),
				'content' => $model->content_en,
			];
		} else {
			$data = [
				'id'      => $model->id,
				'pid'     => $model->pid,
				'name'    => $model->name_cn,
				'image'   => Image::make($model->image),
				'title'   => $model->title_cn,
				'content' => $model->content_cn,
			];
		}

		return view($model->template, ['data' => $data]);
	}
}