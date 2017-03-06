$(document).ready(function(){
	var x = 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var imgTitle = this.myTitle? "<br />" + this.myTitle : "";
		var tooltip = "<div id='tooltip'><img src='" + this.href + "' alt='产品预览图' />"
		+ imgTitle + "</div>";
		$("body").append(tooltip);
		$("#")
	})
});