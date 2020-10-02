//Changing block qualities
$('.buy-items').on('click',function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
	}else{
		$(this).addClass('active');	
	}
});

//Scrollblock
let progress = document.getElementById('progressbar');
let height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / height)*100;
	progress.style.height = progressHeight + "%";
};

