<?php


// 应用公共文件

/**
 * 小部件函数，仅仅供home模块使用
 * @param       $name
 * @param array $data
 * @throws \think\Exception
 */
function widget ($name, $data = [])
{
	// 兼容大写的应用名的写法
	$nameArr = explode('/', $name);

	$contoller = $nameArr[0];
	$action    = $nameArr[1];

	// 兼容没有对应的model文件的写法
	$path = root_path() . '/app/home/widget/' . $contoller . '.php';

	if (file_exists($path)) {
		$class = '\\app\\home\\widget\\' . $contoller;;
	} else {
		throw new \think\Exception($app . '/' . $name . ' widget不存在', 10006);
	}

	$model = new $class(app());

	$content = $model->$action($data);
	echo $content;
}
