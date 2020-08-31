<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    网站配置验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class ConfigValidate extends Validate
{
	protected $rule = [
		'logo'           => 'require',
		'favicon'        => 'require',
		'site_name_cn'   => 'require',
		'site_name_en'   => 'require',
		'keyword_cn'     => 'require',
		'keyword_en'     => 'require',
		'description_cn' => 'require',
		'description_en' => 'require',
		'address_cn'     => 'require',
		'address_en'     => 'require',
		'mobile'         => 'require',
		'email'          => 'require',
	];

	protected $message = [
		'logo.require'           => '请上传网站logo',
		'favicon.require'        => '请上传网站favicon',
		'site_name_cn.require'   => '网站标题中文不能为空',
		'site_name_en.require'   => '网站标题英文不能为空',
		'keyword_cn.require'     => '网站关键字中文不能为空',
		'keyword_en.require'     => '网站关键字英文不能为空',
		'description_cn.require' => '网站描述中文不能为空',
		'description_en.require' => '网站描述英文不能为空',
		'address_cn.require'     => '联系地址中文不能为空',
		'address_en.require'     => '联系地址英文不能为空',
		'mobile.require'         => '联系电话不能为空',
		'email.require'          => '联系邮箱不能为空',
	];
}