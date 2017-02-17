
'use strict';
$(document).ready(function() {
	initializePage();
})

function initializePage() {

	console.log("Javascript connected!");
	$("#dislike").click(dislikeClick);
	$("#myCarousel").carousel({interval: false, wrap: false});
	//$("#myCarousel").carousel('next');
    $("#like").popover(
		{
    		trigger:"focus",    //如果设为focus 当按钮失去焦点提示层会消失，例如页面空白处单机提示层消失
    		placement:"top",
    		html:true,
    		content:'<div class = "list-group"> \
    		    <a ref = "#" class="list-group-item">Pencil</a>\
    			<a ref = "#" class="list-group-item">Box</a>\
    			<a ref = "#" class="list-group-item">Bag</a>\
    			<a ref = "#" class="list-group-item">Tshirt</a>\
    			</div>'
		}
    );   
    $(".list-group-item").click(itemClick);


}


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);


function dislikeClick(e) {
	console.log("Dislike!");
	$("#myCarousel").carousel('next');
	e.preventDefault();
	//loadInfo();
}
function itemClick(e) {
	console.log("Clicked!");


}