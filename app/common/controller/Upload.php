<?php

namespace app\common\controller;

use app\BaseController;
use app\common\service\UploadService;

/**
 * @desc    上传控制器
 * @author  BabyBuffary
 * @date    2020-08-19
 */
class Upload extends BaseController
{
	/**
	 * 图片上传
	 * @return \think\response\Json
	 */
	public function image ()
	{
		$file = $this->request->file('file');
		$crop = $this->request->post('crop', 0);

		if ($crop) {
			validate([
				'file' => 'fileExt:jpg,jpeg,png,gif,bmp|image:1920,800',
			])->check(['file' => $file]);
		} else {
			validate(['file' => 'fileExt:jpg,jpeg,png,gif,bmp,ico'])->check(['file' => $file]);
		}

		$json = UploadService::image($file, $crop);
		return json($json);
	}


	public function um ()
	{
		header('Content-Type:text/html;charset=utf-8');
		$file = $this->request->file('upfile');
		validate(['file' => 'fileExt:jpg,jpeg,png,gif,bmp,ico'])->check(['upfile' => $file]);

		$json = UploadService::um($file);
		echo json_encode($json);
		exit;
	}
}