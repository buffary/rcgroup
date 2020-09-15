<?php

namespace app\home\widget;

use app\BaseController;
use app\common\helper\Tools;
use app\model\ConfigModel;
use think\facade\View;

/**
 * @desc    联系小部件
 * @author  BabyBuffary
 * @date    2020-08-30
 */
class Contact extends BaseController
{
	public function make ()
	{
		$lang  = Tools::lang();
		$model = ConfigModel::where('id', 1)
			->field(['address_cn', 'address_en', 'mobile', 'email', 'location'])
			->find();

		if ($lang == 'en-us') {
			$contact = [
				'address'  => $model->address_en ?? '',
				'mobile'   => $model->mobile ?? '',
				'email'    => $model->email ?? '',
				'location' => $model->location ?? '116.304521,39.968041',
			];
		} else {
			$contact = [
				'address'  => $model->address_cn ?? '',
				'mobile'   => $model->mobile ?? '',
				'email'    => $model->email ?? '',
				'location' => $model->location ?? '116.304521,39.968041',
			];
		}

		$html = View::fetch('contact/index', [
			'contact' => $contact,
		]);

		return $html;
	}
}