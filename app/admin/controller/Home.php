<?php

namespace app\admin\controller;

use app\admin\service\HomeService;
use app\admin\validate\HomeValidate;
use app\BaseController;

/**
 * @desc    首页配置控制器
 * @author  BabyBuffary
 * @date    2020-08-21
 */
class Home extends BaseController
{
	/**
	 * 首页
	 * @return \think\response\View
	 */
	public function index ()
	{
		$config = HomeService::show();
		return view('index', ['config' => $config]);
	}

	/**
	 * 编辑
	 * @return \think\response\Json
	 */
	public function edit ()
	{
		$data = [
			'title_cn'   => $this->request->post('title_cn'),
			'title_en'   => $this->request->post('title_en'),
			'company_cn' => $this->request->post('company_cn'),
			'company_en' => $this->request->post('company_en'),
			'brief_cn'   => $this->request->post('brief_cn'),
			'brief_en'   => $this->request->post('brief_en'),

			'brief_image'   => $this->request->post('brief_image'),
			'logos'         => $this->request->post('logos'),
			'num_award'     => $this->request->post('num_award') + 0,
			'num_company'   => $this->request->post('num_company') + 0,
			'num_turnover'  => $this->request->post('num_turnover') + 0,
			'num_employees' => $this->request->post('num_employees') + 0,
			'content_cn'    => $this->request->post('content_cn'),
			'content_en'    => $this->request->post('content_en'),
		];
		validate(HomeValidate::class)->check($data);

		$json = HomeService::edit($data);
		return json($json);
	}
}