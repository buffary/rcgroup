<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    案例验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class CaseValidate extends Validate
{
	protected $rule = [
		'title_cn'   => 'require',
		'title_en'   => 'require',
		'image'      => 'require',
		'content_cn' => 'require',
		'content_en' => 'require',
	];

	protected $message = [
		'title_cn.require'   => '中文标题不能为空',
		'title_en.require'   => '英文标题不能为空',
		'image.require'      => '背景图片不能为空',
		'content_cn.require' => '中文内容不能为空',
		'content_en.require' => '英文内容不能为空',
	];
}