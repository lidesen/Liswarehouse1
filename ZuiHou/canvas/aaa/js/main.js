requirejs.config({
	baseUrl:'js/',
	paths:{
		"jquery":"libs/jquery-3.2.1",
		"index":"apps/index",
		"swiper":"libs/swiper.min"
	},
	shim:{
		"swiper":{
			deps:["jquery"],
			export:"swiper"
		}
	}
})

requirejs(["jquery","index","swiper"],function(jquery,index,swiper){})
