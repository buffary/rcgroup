<?php

namespace app\model;

/**
 * @desc    Auth认证静态类
 * @author  BabyBuffary
 * @date    2020-07-31
 */
class Auth
{
	private static $uid = 0; // 后台使用

	public static function uid ()
	{
		return self::$uid;
	}

	public static function setUid ($uid = 0)
	{
		self::$uid = $uid;
	}
}