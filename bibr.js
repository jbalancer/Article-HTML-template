$('document').ready(function(){
	var $bibrArt = [],
		$texts   = [],
		$words   = [],
		$lengs   = [];
	for (var r = 0; r < $('.bibr').length; r++) {
		$bibrArt.push($('.bibr').eq(r).text());
		for (var i = 0; i < $bibrArt[r].length; i++) {
			$texts.push($bibrArt[r][i]);
		}
		$('.bibr').eq(r).text(null);
		$lengs.push(parseInt($('.bibr').eq(r).attr('data-len')));
		$words.push($texts);		
		$words[r].length = $lengs[r];
		for (var i = 0; i < $words[r].length; i++) {
			$('.bibr').eq(r).append($words[r][i]);
		}
		$texts.length = null;
	}
	$('.bibr_title_no').removeAttr('title');
});