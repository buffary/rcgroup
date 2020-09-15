<?php

namespace app\admin\validate;

use think\Validate;

/**
 * @desc    首页配置验证
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class HomeValidate extends Validate
{
	protected $rule = [
		'title_cn'      => 'require',
		'title_en'      => 'require',
		'company_cn'    => 'require',
		'company_en'    => 'require',
		'brief_cn'      => 'require',
		'brief_en'      => 'require',
		'brief_image'   => 'require',
		'logos'         => 'require',
		'num_award'     => 'require',
		'num_company'   => 'require',
		'num_turnover'  => 'require',
		'num_employees' => 'require',
		'sudoku'        => 'require',
		'url'           => 'require',
	];

	protected $message = [
		'title_cn.require'      => '首页标题中文不能为空',
		'title_en.require'      => '首页标题英文不能为空',
		'company_cn.require'    => '公司名称中文不能为空',
		'company_en.require'    => '公司名称英文不能为空',
		'brief_cn.require'      => '简介中文不能为空',
		'brief_en.require'      => '简介英文不能为空',
		'brief_image.require'   => '简介图不能为空',
		'logos.require'         => '资质证书不能为空',
		'num_award.require'     => '奖章个数不能为空',
		'num_company.require'   => '公司个数不能为空',
		'num_turnover.require'  => '百万欧元营业额不能为空',
		'num_employees.require' => '员工个数不能为空',
		'sudoku.require'        => '九宫格图片不能为空',
		'url.require'           => '案例链接不能为空',
	];
}