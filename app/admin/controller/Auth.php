<?php

namespace app\admin\controller;

use app\admin\service\AuthService;
use app\admin\validate\LoginValidate;
use app\admin\validate\PasswordValidate;
use app\BaseController;
use think\facade\Session;

/**
 * @desc    后台登录控制器
 * @author  BabyBuffary
 * @date    2020-08-17
 */
class Auth extends BaseController
{
	/**
	 * 登录
	 * @return \think\response\Json|\think\response\View
	 */
	public function login ()
	{
		if ($this->request->isGet()) {
			return view('login', [
				'random' => random_int(0, 1),
			]);
		} else {
			$data = [
				'username' => $this->request->post('username'),
				'password' => $this->request->post('password'),
			];
			validate(LoginValidate::class)->check($data);

			$json = AuthService::login($data);
			return json($json);
		}
	}

	/**
	 * 退出
	 * @return \think\response\Redirect
	 */
	public function logout ()
	{
		Session::delete('uid');
		Session::delete('nickname');
		return redirect('/admin');
	}

	/**
	 * 修改密码
	 * @return \think\response\Json
	 */
	public function password ()
	{
		$data = [
			'oldPwd'    => $this->request->post('oldPwd', ''),
			'password'  => $this->request->post('password', ''),
			'password2' => $this->request->post('password2', ''),
		];
		validate(PasswordValidate::class)->check($data);

		$json = AuthService::password($data);
		return json($json);
	}
}