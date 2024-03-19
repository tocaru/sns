jQuery(function(){
	// Click event for each image with the class 'popup_trigger'
	jQuery('.popup_trigger').click(function(){
		// Get the clicked image source, popup image source, and title
		var imgSrc = jQuery(this).attr('src');
		var popupSrc = jQuery(this).data('popup');
		var title = jQuery(this).data('title');

		// Set the source of the popup image and title
		jQuery('#popup_image').attr('src', popupSrc);
		jQuery('#popup_title').text(title);

		// Show the popup
		jQuery('#open_view_wrap').fadeIn();
	});

	// Click event to close the popup
	jQuery('#open_view_wrap .close').click(function(){
		jQuery('#open_view_wrap').fadeOut();
	});

	// Click event to close the popup when clicking outside of it
	jQuery('#open_view_wrap').click(function(e){
		if (jQuery(e.target).is("#open_view_wrap")) {
			jQuery('#open_view_wrap').fadeOut();
		}
	});
});

  // 팝업 열기 함수
  function openPopup() {
    $('#popup, #overlay').css('display', 'block');
  }

  // 팝업 닫기 함수
  function closePopup() {
    $('#popup, #overlay').css('display', 'none');
  }