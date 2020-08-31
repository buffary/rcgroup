<?php

namespace app\admin\middleware;

use app\model\Auth;
use think\facade\Session;
use think\Request;

/**
 * @desc    admin模块认证登录中间件
 * @author  BabyBuffary
 * @date    2020-08-17
 */
class CheckLogin
{
	public function handle (Request $request, \Closure $next)
	{
		$uid = Session::get('uid', 0);
		if ($uid == 0) {
			if ($request->isGet()) {
				return redirect('/admin/auth/login');
			} else {
				$json = ['code' => 0, 'msg' => '您尚未登录系统'];
				return json($json);
			}
		}
		Auth::setUid($uid);

		return $next($request);
	}
}