<?php

namespace app\common\helper;

use think\helper\Str;

/**
 * @desc    全站图片处理类
 * @author  BabyBuffary
 * @date    2020-08-22
 */
class Image
{
	/**
	 * 全站图片处理类
	 * @param string|null $image
	 * @param string      $cate
	 * @return string
	 */
	public static function make (?string $image = '', string $cate = 'default'): string
	{
		$host = config('app.app_host') . '/';
		if (!$image) {
			// 图片不存在
			switch ($cate) {
				case 'empty':
					return '';
				default:
					return '';
			}
		} else if (!Str::startsWith($image, ['http', 'https'])) {
			// 有图片，但是有可能是远程外链图片
			$image = $host . $image;
		}
		return $image;
	}

	public static function batch (string $images = '')
	{
		$imageArr = [];
		if ($images) {
			$host     = config('app.app_host') . '/';
			$imageArr = explode(',', $images);
			array_walk($imageArr, function (&$item) use ($host) {
				$item = [
					'path' => $item,
					'show' => $host . $item,
				];
			});
		}

		return $imageArr;
	}
}