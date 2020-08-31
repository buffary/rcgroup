<?php

namespace app\home\controller;

use app\BaseController;
use app\model\ContactModel;
use think\facade\Lang;

/**
 * @desc    联系人控制器
 * @author  BabyBuffary
 * @date    2020-08-31
 */
class Contact extends BaseController
{
	public function create ()
	{
		$lang = Lang::getLangSet();
		if ($lang == 'en-us') {
			$successMsg = 'Submitted Successfully';
			$failMsg    = 'Submitted Failed,Try Again';
		} else {
			$successMsg = '提交成功';
			$failMsg    = '提交失败，请重试';
		}

		$data = [
			'gender'     => $this->request->post('gender', 0),
			'first_name' => $this->request->post('first_name', ''),
			'last_name'  => $this->request->post('last_name', ''),
			'company'    => $this->request->post('company', ''),
			'email'      => $this->request->post('email', ''),
			'tel'        => $this->request->post('tel', ''),
			'message'    => $this->request->post('message', ''),
		];

		$result = ContactModel::create($data);
		if ($result) return json(['status' => 1, 'msg' => $successMsg]);
		return json(['status' => 0, 'msg' => $failMsg]);
	}
}