class Floor{
	constructor(lc,tip){
		this.lc = lc;
		this.tip = tip;
		this.init();
		this.tops_click();
		this.lcs_click();
		this.window_scroll();
	}
	init(){
		this.arr = this.lc.map(function(ind,el){
			return $(el).offset().top;
		})
		this.arr.push(this.arr[this.arr.length-1]+this.lc.eq(this.lc.length-1).height());
	}
	tops_click(){
		this.tip.find("ul>li").click(function(){
			$("html").animate({"scrollTop":0},500);
		})
	}
	lcs_click(){
		var that = this;
		this.tip.find("ol>li").click(function(){
			$("html").animate({"scrollTop":that.arr[$(this).index()]},500);
		})
	}
	window_scroll(){
		var that = this;
		$(window).scroll(function(){
			var ind=-1;
			var str = $(window).scrollTop();
			str = str+ $(window).height()/2;
			for(var i=0;i<that.arr.length-1;i++){
				var min = that.arr[i];
				var max = that.arr[i+1];
				if(str>min&&str<max){
					ind=i;
				}
			}
			if(ind!=-1){
				that.tip.find("ol>li").eq(ind).addClass("selected").siblings().removeClass("selected");
			}
			if(str>$(window).height()/2){
				that.tip.fadeIn();
			}else{
				that.tip.fadeOut();
			}
		})
	}	
}
