<?php

namespace app\model;

use think\Model;
use think\model\concern\SoftDelete;

/**
 * @desc    案例模型
 * @author  BabyBuffary
 * @date    2020-07-30
 */
class CaseModel extends Model
{

	use SoftDelete;

	protected $name = 'case';
}