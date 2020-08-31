<?php

namespace app\admin\service;

use app\model\AdminModel;
use app\model\Auth;
use think\facade\Session;

/**
 * @desc    认证服务层
 * @author  BabyBuffary
 * @date    2020-08-17
 */
class AuthService
{
	/**
	 * 登录
	 * @param array $data
	 */
	public static function login (array &$data)
	{
		try {
			$model = AdminModel::where('username', $data['username'])->find();
			if (!password_verify($data['password'], $model->password)) {
				return ['code' => 0, 'msg' => '用户名或者密码错误'];
			}

			// 写入SESSION
			Session::set('uid', $model->id);
			Session::set('nickname', $model->nickname);

			return ['code' => 1];
		} catch (\Exception $e) {
			return ['code' => 0, 'msg' => '用户名或者密码错误'];
		}
	}

	/**
	 * 修改密码
	 * @param array $data
	 * @return array|int[]
	 */
	public static function password (array &$data)
	{
		$model = AdminModel::where('id', Auth::uid())->find();
		if (!password_verify($data['oldPwd'], $model->password)) {
			return ['code' => 0, 'msg' => '旧密码输入错误'];
		}

		$newPassword = password_hash($data['password'], 1);
		$result      = $model->save(['password' => $newPassword]);

		if ($result) return ['code' => 1];
		return ['code' => 0, 'msg' => '密码修改失败'];
	}
}