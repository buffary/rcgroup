<?php

namespace app\admin\controller;

use app\admin\service\NavService;
use app\admin\service\SecondService;
use app\admin\validate\SecondValidate;
use app\BaseController;

/**
 * @desc    二级导航控制器
 * @author  BabyBuffary
 * @date    2020-08-21
 */
class Second extends BaseController
{
	/**
	 * 列表
	 * @return \think\response\Json|\think\response\View
	 */
	public function index ()
	{
		if ($this->request->isGet()) {
			$topNavList = NavService::getTopList();
			return view('index', [
				'topNavList' => $topNavList,
			]);
		} else {
			$data = [
				'pid'   => $this->request->post('pid', 1),
				'page'  => $this->request->post('page', 1),
				'limit' => $this->request->post('limit', 20),
			];
			$json = NavService::getList($data);
			return json($json);
		}
	}

	/**
	 * 发布
	 * @return \think\response\Json
	 */
	public function edit ()
	{
		if ($this->request->isGet()) {
			$id         = $this->request->get('id', 0);
			$nav        = NavService::show($id);
			$topNavList = NavService::getTopList();
			return view('edit', [
				'nav'        => $nav,
				'topNavList' => $topNavList,
			]);
		} else {
			$id   = $this->request->post('id', 0);
			$data = [
				'pid'        => $this->request->post('pid', 1),
				'name_cn'    => $this->request->post('name_cn'),
				'name_en'    => $this->request->post('name_en'),
				'title_cn'   => $this->request->post('title_cn'),
				'title_en'   => $this->request->post('title_en'),
				'template'   => $this->request->post('template', 'common'),
				'image'      => $this->request->post('image'),
				'sort'       => $this->request->post('sort', 10000),
				'content_cn' => $this->request->post('content_cn'),
				'content_en' => $this->request->post('content_en'),
			];
			$this->validate($data, SecondValidate::class);

			$json = NavService::edit($id, $data);
			return json($json);
		}
	}

	/**
	 * 修改状态
	 * @return \think\response\Json
	 */
	public function status ()
	{
		$id   = $this->request->post('id', 0);
		$data = ['status' => $this->request->post('status', 1)];
		$json = NavService::edit($id, $data);
		return json($json);
	}
}