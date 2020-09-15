<?php

namespace app\admin\controller;

use app\admin\service\CasesService;
use app\admin\validate\CaseValidate;
use app\BaseController;

/**
 * @desc    案例控制器
 * @author  BabyBuffary
 * @date    2020-08-29
 */
class Cases extends BaseController
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
			$json = CasesService::getList($data);
			return json($json);
		}
	}

	/**
	 * 编辑
	 */
	public function edit ()
	{
		if ($this->request->isGet()) {
			$id    = $this->request->get('id', 0);
			$cases = CasesService::show($id);
			return view('edit', ['cases' => $cases]);
		} else {
			$id   = $this->request->post('id', 0);
			$data = [
				'title_cn'   => $this->request->post('title_cn'),
				'title_en'   => $this->request->post('title_en'),
				'image'      => $this->request->post('image'),
				'content_cn' => $this->request->post('content_cn'),
				'content_en' => $this->request->post('content_en'),
			];
			$this->validate($data, CaseValidate::class);

			$json = CasesService::edit($id, $data);
			return json($json);
		}
	}

	/**
	 * 删除状态
	 * @return \think\response\Json
	 */
	public function delete ()
	{
		$id   = $this->request->post('id', 0);
		$json = CasesService::delete($id);
		return json($json);
	}
}