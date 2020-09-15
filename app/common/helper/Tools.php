<?php

namespace app\common\helper;

class Tools
{
	/**
	 * 后台暂时强制英文
	 * @return string
	 */
	public static function lang ()
	{
		return \think\facade\Lang::getLangSet();
	}
}