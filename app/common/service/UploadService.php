<?php

namespace app\common\service;

use app\common\helper\Image;
use think\facade\Filesystem;
use think\file\UploadedFile;
use think\helper\Str;

/**
 * @desc    文件上传服务层
 * @author  BabyBuffary
 * @date    2020-08-02
 */
class UploadService
{

	/**
	 * 上传图片
	 * @param UploadedFile $file
	 * @param int          $crop 是否裁剪
	 * @return array
	 */
	public static function image (UploadedFile $file, $crop = 0)
	{
		$saveName = Filesystem::disk('uploads')->putFile('', $file, function () {
			return date('Ym') . DIRECTORY_SEPARATOR . Str::random(16, 5);
		});

		// 图片裁剪
		if ($crop) self::crop($saveName);

		return [
			'code' => 1,
			'data' => [
				'path'     => $saveName,
				'pathShow' => Image::make($saveName),
			],
		];
	}

	/**
	 * UM图片上传
	 * @param UploadedFile $file
	 * @return array
	 */
	public static function um (UploadedFile $file)
	{
		$fileName    = $file->getOriginalName();
		$extension   = pathinfo($fileName, PATHINFO_EXTENSION);
		$newFileName = Str::random(16, 5);
		$saveName    = Filesystem::disk('uploads')->putFile('', $file, function () use ($newFileName) {
			return date('Ym') . DIRECTORY_SEPARATOR . $newFileName;
		});

		return [
			'originalName' => $file->getOriginalName(),
			'name'         => $newFileName . '.' . $extension,
			'url'          => Image::make($saveName),
			'size'         => $file->getSize(),
			'type'         => $extension,
			'state'        => 'SUCCESS',
		];
	}

	/**
	 * 图片裁剪
	 * @param string $file
	 */
	private static function crop (string $file)
	{
		$pathinfo = pathinfo($file);
		$newPath  = '/uploads/' . $pathinfo['dirname'] . '/' . $pathinfo['filename'] . '_800.' . $pathinfo['extension'];
		$image    = \think\Image::open('/uploads/' . $file);
		//将图片裁剪为400x400并保存为corp.jpg
		$image->crop(800, 800, 560, 0)->save($newPath);
	}
}