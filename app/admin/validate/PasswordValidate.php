<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    修改密码验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class PasswordValidate extends Validate
{
	protected $rule = [
		'oldPwd'    => 'require',
		'password'  => 'require|min:6|max:20',
		'password2' => 'require|confirm:password',
	];

	protected $message = [
		'oldPwd.require'    => '旧密码不能为空',
		'password.require'  => '新密码不能为空',
		'password.min'      => '新密码长度为6-20位',
		'password.max'      => '新密码长度为6-20位',
		'password2.require' => '确认密码不能为空',
		'password2.confirm' => '两次新密码不一致',
	];
}