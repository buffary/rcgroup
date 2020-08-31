<?php

namespace app\admin\controller;

use app\admin\service\NewsService;
use app\admin\validate\NewsValidate;
use app\BaseController;

/**
 * @desc    新闻控制器
 * @author  BabyBuffary
 * @date    2020-08-29
 */
class News extends BaseController
{
	/**
	 * 列表
	 * @return \think\response\Json|\think\response\View
	 */
	public function index ()
	{
		if ($this->request->isGet()) {
			return view('index');
		} else {
			$data = [
				'page'  => $this->request->post('page', 1),
				'limit' => $this->request->post('limit', 20),
			];
			$json = NewsService::getList($data);
			return json($json);
		}
	}

	/**
	 * 编辑
	 */
	public function edit ()
	{
		if ($this->request->isGet()) {
			$id   = $this->request->get('id', 0);
			$news = NewsService::show($id);
			return view('edit', ['news' => $news]);
		} else {
			$id   = $this->request->post('id', 0);
			$data = [
				'title_cn'   => $this->request->post('title_cn'),
				'title_en'   => $this->request->post('title_en'),
				'thumb'      => $this->request->post('thumb'),
				'image'      => $this->request->post('image'),
				'digest_cn'  => $this->request->post('digest_cn'),
				'digest_en'  => $this->request->post('digest_en'),
				'content_cn' => $this->request->post('content_cn'),
				'content_en' => $this->request->post('content_en'),
			];
			$this->validate($data, NewsValidate::class);

			$json = NewsService::edit($id, $data);
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
		$json = NewsService::edit($id, $data);
		return json($json);
	}
}