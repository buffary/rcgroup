<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    新闻验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class NewsValidate extends Validate
{
	protected $rule = [
		'title_cn'   => 'require',
		'title_en'   => 'require',
		'thumb'      => 'require',
		'image'      => 'require',
		'digest_cn'  => 'require',
		'digest_en'  => 'require',
		'content_cn' => 'require',
		'content_en' => 'require',
	];

	protected $message = [
		'title_cn.require'   => '中文标题不能为空',
		'title_en.require'   => '英文标题不能为空',
		'thumb.require'      => '缩略图不能为空',
		'image.require'      => '背景图片不能为空',
		'digest_cn.require'  => '中文摘要不能为空',
		'digest_en.require'  => '英文摘要不能为空',
		'content_cn.require' => '中文内容不能为空',
		'content_en.require' => '英文内容不能为空',
	];
}