$(document).ready(function() {
 
  //var approot = $('link#approot').attr('href');
  // Add stylesheet to bottom of stack (if skipped adding in Step 2)
  //$('head').append('<link type="text/css" rel="stylesheet" href="'+approot+'hooks/my_hook/custom.css" />');

	$('body').on('pageLoadComplete',function() {

		var pathLinkNext = $("a.nav_btn.primary");

		if ($('body').hasClass('parent-chapter-1')) {
			if ($('body').hasClass('page-chapter-1-section-1')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-2?path=chapter-1");
				$(pathLinkNext).text('Continue to “Theater of the World”');
			}
			else if ($('body').hasClass('page-chapter-1-section-2')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-3?path=chapter-1");
				$(pathLinkNext).text('Continue to “The Evolution of a Painting”');
			}
			else if ($('body').hasClass('page-further-insights-cosmoramas')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-3?path=chapter-1");
				$(pathLinkNext).text('Continue to “The Evolution of a Painting”');
			}
			else if ($('body').hasClass('page-chapter-1-section-3')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-4?path=chapter-1");
				$(pathLinkNext).text('Continue to “A Scherzo about Painting”');
			}
			else if ($('body').hasClass('page-further-insights-a-family-theme')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-4?path=chapter-1");
				$(pathLinkNext).text('Continue to “A Scherzo about Painting”');
			}
			else if ($('body').hasClass('page-chapter-1-section-4')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-5?path=chapter-1");
				$(pathLinkNext).text('Continue to “Dissonant Notes”');
			}
			else if ($('body').hasClass('page-further-insights-a-pictorial-cosmorama')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-5?path=chapter-1");
				$(pathLinkNext).text('Continue to “Dissonant Notes”');
			}
			else if ($('body').hasClass('page-chapter-1-section-5')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-6?path=chapter-1");
				$(pathLinkNext).text('Continue to “Conclusion”');
			}
			else if ($('body').hasClass('page-further-insights-an-uncanny-musical-scherzo')) {
				$(pathLinkNext).attr("href", "/sp/chapter-1-section-6?path=chapter-1");
				$(pathLinkNext).text('Continue to “Conclusion”');
			}
			else if ($('body').hasClass('page-chapter-1-section-6')) {
				$(pathLinkNext).attr("href", "/sp/chapter-2-section-1?path=chapter-2");
				$(pathLinkNext).text('Continue to “Chapter 2 | Inside the Casotto”');
			}
		}
		else if ($('body').hasClass('parent-chapter-2')) {
			if ($('body').hasClass('page-chapter-2-section-1')) {
				$(pathLinkNext).attr('href', '/sp/chapter-2-section-2?path=chapter-2');
				$(pathLinkNext).text('Continue to “Animating the View”');	
			}
			else if ($('body').hasClass('page-further-insights-the-interior-of-our-eye')) {
				$(pathLinkNext).attr('href', '/sp/chapter-2-section-2?path=chapter-2');
				$(pathLinkNext).text('Continue to “Animating the View”');	
			}
			else if ($('body').hasClass('page-chapter-2-section-2')) {
				$(pathLinkNext).attr('href', '/sp/chapter-2-section-3?path=chapter-2');
				$(pathLinkNext).text('Continue to “Virtual City”');	
			}
			else if ($('body').hasClass('page-further-insights-eidophusikon')) {
				$(pathLinkNext).attr('href', '/sp/chapter-2-section-3?path=chapter-2');
				$(pathLinkNext).text('Continue to “Virtual City”');	
			}
			else if ($('body').hasClass('page-chapter-2-section-3')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-1?path=chapter-3');
				$(pathLinkNext).text('Continue to “Chapter 3 | Social Voyeurism”');	
			}
		}
		else if ($("body").hasClass("parent-chapter-3")) {
			if ($('body').hasClass('page-chapter-3-section-1')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-2?path=chapter-3');
				$(pathLinkNext).text('Continue to “A Diabolical Little Glass”');	
			}
			else if ($('body').hasClass('page-chapter-3-section-2')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-3?path=chapter-3');
				$(pathLinkNext).text('Continue to “Dénouement”');	
			}
			else if ($('body').hasClass('page-further-insights-panoptical-theatre')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-3?path=chapter-3');
				$(pathLinkNext).text('Continue to “Dénouement”');	
			}
			else if ($('body').hasClass('page-chapter-3-section-3')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-4?path=chapter-3');
				$(pathLinkNext).text('Continue to “Casanova’s Shadow Play”');	
			}
			else if ($('body').hasClass('page-further-insights-the-stolen-crystal')) {
				$(pathLinkNext).attr('href', '/sp/chapter-3-section-4?path=chapter-3');
				$(pathLinkNext).text('Continue to “Casanova’s Shadow Play”');	
			}
			else if ($('body').hasClass('page-chapter-3-section-4')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-1?path=chapter-4');
				$(pathLinkNext).text('Continue to “Chapter 4 | A Real Phantasmagoria”');	
			}
		}
		else if ($("body").hasClass("parent-chapter-4")) {
			if ($('body').hasClass('page-chapter-4-section-1')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-2?path=chapter-4');
				$(pathLinkNext).text('Continue to “Aggrescopius”');	
			}
			else if ($('body').hasClass('page-further-insights-the-shadow-show')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-2?path=chapter-4');
				$(pathLinkNext).text('Continue to “Aggrescopius”');	
			}
			else if ($('body').hasClass('page-chapter-4-section-2')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-3?path=chapter-4');
				$(pathLinkNext).text('Continue to “The Tomb”');	
			}
			else if ($('body').hasClass('page-further-insights-the-call-of-egypt-a-moving-panorama')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-3?path=chapter-4');
				$(pathLinkNext).text('Continue to “The Tomb”');	
			}
			else if ($('body').hasClass('page-chapter-4-section-3')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-4?path=chapter-4');
				$(pathLinkNext).text('Continue to “The Aura of the Facsimile”');	
			}
			else if ($('body').hasClass('page-chapter-4-section-4')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-4?path=chapter-4');
				$(pathLinkNext).text('Continue to “The Mummy, Revealed”');	
			}
			else if ($('body').hasClass('page-further-insights-a-sarcophagus-party')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-5?path=chapter-4');
				$(pathLinkNext).text('Continue to “The Mummy, Revealed”');	
			}
			else if ($('body').hasClass('page-chapter-4-section-5')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-6?path=chapter-4');
				$(pathLinkNext).text('Continue to “Conclusions”');	
			}
			else if ($('body').hasClass('page-further-insights-why-did-he-go-there')) {
				$(pathLinkNext).attr('href', '/sp/chapter-4-section-6?path=chapter-4');
				$(pathLinkNext).text('Continue to “Conclusions”');	
			}
			else if ($('body').hasClass('page-chapter-4-section-6')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-1?path=chapter-5');
				$(pathLinkNext).text('Continue to “Chapter 5 | History at a Glance”');	
			}	
		}
		else if ($("body").hasClass("parent-chapter-5")) {
			if ($('body').hasClass('page-chapter-5-section-1')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-2?path=chapter-5');
				$(pathLinkNext).text('Continue to “Total Vision and Vision in Motion”');	
			}
			else if ($('body').hasClass('page-further-insights-who-created-the-panorama')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-2?path=chapter-5');
				$(pathLinkNext).text('Continue to “Total Vision and Vision in Motion”');	
			}
			else if ($('body').hasClass('page-chapter-5-section-2')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-3?path=chapter-5');
				$(pathLinkNext).text('Continue to “Romancing the Hero”');	
			}
			else if ($('body').hasClass('page-further-insights-history-at-a-glance')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-3?path=chapter-5');
				$(pathLinkNext).text('Continue to “Romancing the Hero”');	
			}
			else if ($('body').hasClass('page-chapter-5-section-3')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-4?path=chapter-5');
				$(pathLinkNext).text('Continue to “Transmedia History-telling”');	
			}
			else if ($('body').hasClass('page-chapter-5-section-4')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-4?path=chapter-5');
				$(pathLinkNext).text('Continue to “’Round the World in Two Hours”');	
			}
			else if ($('body').hasClass('page-further-insights-garibaldi-and-robin-hood')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-5?path=chapter-5');
				$(pathLinkNext).text('Continue to “’Round the World in Two Hours”');	
			}
			else if ($('body').hasClass('page-chapter-5-section-5')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-6?path=chapter-5');
				$(pathLinkNext).text('Continue to “From Aspromonte to the New World”');	
			}
			else if ($('body').hasClass('page-further-insights-the-battle-of-aspromonte')) {
				$(pathLinkNext).attr('href', '/sp/chapter-5-section-6?path=chapter-5');
				$(pathLinkNext).text('Continue to “From Aspromonte to the New World”');	
			}
			else if ($('body').hasClass('page-chapter-5-section-6')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-1?path=chapter-6');
				$(pathLinkNext).text('Continue to “Chapter 6 | Fossilized Shadows”');	
			}
		}
		else if ($("body").hasClass("parent-chapter-6")) {
			if ($('body').hasClass('page-chapter-6-section-1')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-2?path=chapter-6');
				$(pathLinkNext).text('Continue to “A Formidable Book of Travels”');	
			}
			else if ($('body').hasClass('page-further-insights-stereoscopic-travel')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-2?path=chapter-6');
				$(pathLinkNext).text('Continue to “A Formidable Book of Travels”');	
			}
			else if ($('body').hasClass('page-chapter-6-section-2')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-3?path=chapter-6');
				$(pathLinkNext).text('Continue to “Mini Grand Tour, Reversed”');	
			}
			else if ($('body').hasClass('page-further-insights-stereoscopic-library')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-3?path=chapter-6');
				$(pathLinkNext).text('Continue to “Mini Grand Tour, Reversed”');	
			}
			else if ($('body').hasClass('page-chapter-6-section-3')) {
				$(pathLinkNext).attr('href', '/sp/chapter-6-section-4?path=chapter-6');
				$(pathLinkNext).text('Continue to “Distant Shadows”');	
			}
			else if ($('body').hasClass('page-chapter-6-section-4')) {
				$(pathLinkNext).attr('href', '/sp/simulations');
				$(pathLinkNext).text('Continue to Simulations');	
			}
		}
	});
});