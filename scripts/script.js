function phoneMenu() {
	let phoneMenuList = document.getElementById('phoneMenuList');
	if ($(phoneMenuList).css('visibility') == 'visible') {
		
		$(phoneMenuList).css('visibility', 'hidden')
		$(phoneMenuList).css('opacity', '0');
		$(phoneMenuList).css('transform', 'scale(1,0) translate(0, -100%)');
	
	} else {
		
		$(phoneMenuList).css('visibility', 'visible')
		$(phoneMenuList).css('opacity', '1');
		$(phoneMenuList).css('transform', 'scale(1,1) translate(0, 0)');
		
	}
}


window.addEventListener('click', function(e){   
  if (document.getElementById('phoneMenu').contains(e.target)){

  } else {
    $(phoneMenuList).css('visibility', 'hidden')
	$(phoneMenuList).css('opacity', '0');
	$(phoneMenuList).css('transform', 'scale(1,0) translate(0, -100%)');
  }
});