<?php

namespace app\home\controller;

use app\common\helper\Image;
use app\common\helper\Tools;
use app\model\CaseModel;

class Cases extends Common
{
	public function index ($id)
	{
		$model = CaseModel::where('id', $id)->find();
		if (null == $model) {
			return redirect('/');
		}

		$lang = Tools::lang();
		if ($lang == 'en-us') {
			$data = [
				'id'      => $model->id,
				'title'   => $model->title_en,
				'image'   => Image::make($model->image),
				'content' => $model->content_en,
			];
		} else {
			$data = [
				'id'      => $model->id,
				'title'   => $model->title_cn,
				'image'   => Image::make($model->image),
				'content' => $model->content_cn,
			];
		}

		return view('index', ['data' => $data]);
	}
}