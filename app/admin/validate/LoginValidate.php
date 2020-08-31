<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    登录验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class LoginValidate extends Validate
{
	protected $rule = [
		'username' => 'require',
		'password' => 'require',
	];

	protected $message = [
		'username.require' => '用户名不能为空',
		'password.require' => '密码不能为空',
	];
}