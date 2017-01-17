/*
* @Author: erdou
* @Date:   2017-01-13 08:50:48
* @Last Modified by:   erdou
* @Last Modified time: 2017-01-13 13:45:29
*/

'use strict';
$(function(){
	
	// 点击a导航菜单中某一个 让页面跳转
	$(".nav").singlePageNav({
		offset:70//导航高度 偏移量
	});

	// 移动端导航中点击菜单汉堡菜单折叠
	$(".navbar-collapse a").click(function(){
		$(".navbar-collapse").collapse('hide');
	});

	// 动画效果
	new WOW().init();

	
});