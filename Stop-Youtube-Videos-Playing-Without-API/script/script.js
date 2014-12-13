jQuery(function($) {	
	var $video   = $( '#videos' );
	var $panels  = $video.find( '.video-panel-wrap' );
	var $links   = $video.find( '.video-link' );
	var $iframes = $video.find( '.video-content' );
	
	$.each( $panels, function () {

		var $panel  = $( this );
		var $link   = $panel.find( '.video-link' );
		var $iframe = $panel.find( '.video-content' );
		var src     = $iframe.attr( 'src' );

		$link.on( 'click', function () {

			$links.not( $link ).fadeIn();
			$iframes.not( $iframe ).attr( 'src', '' );
			$iframe.attr( 'src', src );
			$link.fadeOut();
		});

	})
});