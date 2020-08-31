<?php

namespace app\admin\controller;

use app\admin\service\ConfigService;
use app\admin\validate\ConfigValidate;
use app\BaseController;

/**
 * @desc    网站配置控制器
 * @author  BabyBuffary
 * @date    2020-08-21
 */
class Config extends BaseController
{
	/**
	 * 首页
	 * @return \think\response\View
	 */
	public function index ()
	{
		$config = ConfigService::show();
		return view('index', ['config' => $config]);
	}

	/**
	 * 编辑
	 * @return \think\response\Json
	 */
	public function edit ()
	{
		$data = [
			'logo'           => $this->request->post('logo'),
			'favicon'        => $this->request->post('favicon'),
			'site_name_cn'   => $this->request->post('site_name_cn'),
			'site_name_en'   => $this->request->post('site_name_en'),
			'keyword_cn'     => $this->request->post('keyword_cn'),
			'keyword_en'     => $this->request->post('keyword_en'),
			'description_cn' => $this->request->post('description_cn'),
			'description_en' => $this->request->post('description_en'),
			'address_cn'     => $this->request->post('address_cn'),
			'address_en'     => $this->request->post('address_en'),
			'mobile'         => $this->request->post('mobile'),
			'email'          => $this->request->post('email'),
		];
		validate(ConfigValidate::class)->check($data);

		$json = ConfigService::edit($data);
		return json($json);
	}
}