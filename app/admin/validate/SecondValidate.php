<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    二级菜单验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class SecondValidate extends Validate
{
	protected $rule = [
		'pid'        => 'require',
		'name_cn'    => 'require',
		'name_en'    => 'require',
		'title_cn'   => 'require',
		'title_en'   => 'require',
		'image'      => 'require',
		'content_cn' => 'require',
		'content_en' => 'require',
	];

	protected $message = [
		'pid.require'        => '所属父级导航不能为空',
		'name_cn.require'    => '导航中文名称不能为空',
		'name_en.require'    => '导航英文名称不能为空',
		'title_cn.require'   => '导航中文标题不能为空',
		'title_en.require'   => '导航英文标题不能为空',
		'image.require'      => '背景图片不能为空',
		'content_cn.require' => '中文内容不能为空',
		'content_en.require' => '英文内容不能为空',
	];
}