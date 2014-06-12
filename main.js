// JavaScript Document

// When the page first loads, it parses the URL, if it finds a # then it grabs the string after it and does a switch function to match it to an episode function, default is call nothing.

function checkAnchor(){

var imageNum = window.location.hash;

switch(imageNum)
{
	case '#stocktoids': stocktoids(); break;
	case '#facebookipo': facebookipo(); break;
	case '#slidestream': slidestream(); break;
	case '#olysmiles': olysmiles(); break;
	case '#olystadium': olystadium(); break;
	case '#mixingitup': mixingitup(); break;
	case '#gubernatorial': gubernatorial(); break;
	case '#photopage': photopage(); break;
	case '#oscars': oscars(); break;
	case '#502': heisman(); break;
	case '#snyder': snyder(); break;
	case '#homebrew': homebrew(); break;
	case '#bookdesign': bookdesign(); break;
	case '#derbydimes' : derbydimes(); break;
	case '#drummajor': drummajor(); break;
	/*case '#cartsvid': cartsvid(); break;
	case '#protest': protest(); break;
	case '#photographers': photographers(); break;
	*/case '#kevin': kevin(); break;
	/*case '#fballbook': fballbook(); break;
	case '#greekvine': greekvine(); break;
	case '#manners': manners(); break;
	*/case '#faking': faking(); break;
	case '#markscarts': markscarts(); break;
	case '#stereotype': stereotype(); break;
	//case '#tasteAnnArbor': tasteAnnArbor(); break;
	case '#features': features(); break;
	case '#sports': sports(); break;
	/*case '#football': football(); break;
	case '#softball': softball(); break;*/
	default: break;
}

}

function stocktoids(){
	var newEpisode = "<h4>Self-updating, factoid generator collects market data and calculates nine facts of interest. The data is wrangled by PHP and MySql and the front end uses SocialClimber, a custom plug-in for generating custom social buttons, a modified version of <a class='external' href='http://twitter.github.io/typeahead.js/'>typeahead.js</a>, and <a class='external' href='http://handlebarsjs.com/'>handlebars.js</a>. Stocktoids has an admin site for editors to edit the list of included tickers, and hash changes allow for individual company pages to be displayed with stories. In addition to being a resource for readers, Stocktoids is a tool for reporters and editors to find interesting numbers for stories.</h4><iframe src='http://projects.marketwatch.com/stocktoids?standalone=1' width='770' height='683' frameborder='0' marginwidth='0' marginheight='0' hspace='0' vspace='0' border='0' scrolling='yes' style='margin: 5px 0 0 0px; padding: 0px;'></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function facebookipo(){
	var newEpisode = "<h4>Timeline, published on <a class='external' href='http://projects.marketwatch.com/facebook-ipo-anniversary-timeline/#'>MarketWatch.com</a>, highlighting key events in Facebook's first year as a publicly traded company. I designed and developed the responsive, mobile-friendly page in a few days  using Highcharts.js and SocialClimber, my custom plug-in for social sharing buttons. In development, the text and media were easily editable as a JSON file and incorporated using a Handlebars.js template, and the page was later compiled for publishing</h4><iframe src='http://projects.marketwatch.com/facebook-ipo-anniversary-timeline/?standalone=1#' width='770' height='683' frameborder='0' marginwidth='0' marginheight='0' hspace='0' vspace='0' border='0' scrolling='yes' style='margin: 5px 0 0 0px; padding: 0px;'></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function slidestream(){
	var newEpisode = "<h4>Social slideshow tool built for <em>The Wall Street Journal</em>. Primarily built the <a class='external' href='http://projects.wsj.com/slidestream/viewer/index.php?slug=ELECTION_STANDALONE&map=true'>responsive</a> front end to work crossbrowsers and platforms. Tool includes several options, e.g., a custom Google Map for images with geodata, an adjustable aspect ratio for the viewer and <a class='external' href='http://online.wsj.com/article/SB10000872396390444405804577561282207481746.html'>panorama</a> setting. Helped develop the admin side built on Backbone.js.</h4><iframe src='http://projects.wsj.com/slidestream/viewer/index.php?slug=OLYMPICSWSJ&map=true' width='770' height='683' frameborder='0' marginwidth='0' marginheight='0' hspace='0' vspace='0' border='0' scrolling='no' style='margin: 5px 0 0 0px; padding: 0px;'></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function olysmiles(){
	var newEpisode = "<h4>Visual voting tool built for <em>The Wall Street Journal</em>. Responsive Application is built on a preexisting framework and admin tool for another poll adopted to extend to additional projects. Framework also used to redesign a <a class='external' href='http://projects.wsj.com/quiz/how.php?uid=HOW120914&type=house'>Flash poll using JavaScript</a>. <a class='external' href='http://projects.wsj.com/olympics2012/london-winning-faces/index.php?uid=medal_faces&type=olympics'>Vote: Winning Faces</a></h4><img src='/images/olysmiles-before.png' width='750px' /><img src='/images/olysmiles-after.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function olystadium(){
	var newEpisode = "<h4>I built the presentation page for two graphics about the Olympic Stadium and Village. The video about the Olympic Stadium is linked to navigation steps using JW Player. <a class='external' href='http://projects.wsj.com/olympics2012/olympic-park/'>Playing London's Games</a></h4><img src='/images/olystadium.png' width='750px' /><img src='/images/olyvillage.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function mixingitup(){
	var newEpisode = "<h4>Investment poll for <em>The Wall Street Journal</em>'s monthly financial column Mixing It Up. Uses Highcharts.js to graph your answers against average of users. Submissions automatically reset every month. <a class='external' href='http://online.wsj.com/article/SB10001424127887324307204578129034183630410.html#articleTabs%3Dinteractive'>How Does Your Allocation Compare?</a></h4><img src='/images/MIU.png' width='750px' /><img src='/images/MIU-submit.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function gubernatorial(){
	var newEpisode = "<h4><em>Nov. 3, 2010</em> - A county-by-county breakdown of the gubernatorial vote in Tuesday's race between Republican Rick Snyder and Democrat Virg Bernero. Created using Adobe Flash and ActionScript 3.</h4><object width='610px' height='620px'><param name='movie' value='https://www.michigandaily.com/files/ELECTION_RESULT_3.swf'><embed src='https://www.michigandaily.com/files/ELECTION_RESULT_3.swf' width='610' height='620'></object>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function photopage(){
	var newEpisode = "<h4><em>March 30, 2011</em> - Special package for photos of the year. Select photos are paired with a brief interview with the photographer, which I helped edit. Design and code done on deadline. <a class='external' href='http://michigandaily.com/photostore-best2011'>Photos of the Year, 2010-2011</a></h4><img src='/images/PhotosoftheYear.png' width='625px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function oscars(){
	var newEpisode = "<h4><em>Feb. 24, 2011</em> - Front page of a special Academy Awards edition of The Michigan Daily's weekly arts insert, The B-Side. Second place features page in the 2011 SSND Missouri college news design contest.</h4><img src='/images/2_24_11_1B_Oscars.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function heisman(){
	var newEpisode = "<h4><em>Sept. 13, 2010</em> - Front page of The Michigan Daily's weekly sports insert, SportsMonday, following Michigan football's victory over Notre Dame. First place sports page in the 2011 MSU SND college news design contest.</h4><img src='/images/9_13_10_SM_502.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function snyder(){
	var newEpisode = "<h4><em>Nov. 3, 2010</em> - Front page design and graphics following the 2010 midterm elections. Second place front page of a newspaper in the 2011 MSU SND college news design contest.</h4><br><img src='/images/11_03_10_1A_Snyder.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function homebrew(){
	var newEpisode = "<h4><em>Dec. 1, 2010</em> - Center spread design for the second annual beer issue of The Michigan Daily's weekly magazine, The Statement. First place features page and first place information graphic in the 2011 SSND Missouri college news design contest.</h4><img src='/images/culture-homebrewing.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function bookdesign(){
	var newEpisode = "<h4>Cover design and sample pages from The Michigan Daily's 176-page coffee table book. I am one of the editors of the book, the lead designer, and I managed sales and shipping for the first five months.<a class='external' href='http://book.michigandaily.com'>Michigan Football: A History of the Nation's Winningest Program</a></h4><img src='/images/fballbook_cover.jpg' width='750px' /><img src='/images/fballbook_9.png' width='750px' /><img src='/images/fballbook_80.png' width='750px' /><img src='/images/fballbook_97.png' width='750px' /><img src='/images/fballbook_159.png' width='750px' /><img src='/images/fballbook_web.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function derbydimes(){
	var newEpisode = "<h4><em>Nov. 6, 2011</em> - Ann Arbor Derby Dimes consists of three teams that compete in roller derby matches in Michigan. This is an introduction to roller derby from their double &quot;be-header&quot; on Oct. 29. I worked with two other people to produce the video. I shot the majority of the footage using a Nikon D300S and did most of the editing.</h4><iframe src='http://player.vimeo.com/video/31837953?byline=0&amp;portrait=0' width='750' height='497' frameborder='0' webkitAllowFullScreen allowFullScreen></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function drummajor(){
	var newEpisode = "<h4><em>June 30, 2011</em> - Jeffrey McMahon, the Michigan Marching Band Drum Major for the 2011 football season and Engineering senior, talks about his new position and practices in Michigan Stadium. Filmed using a Flip UltraHD and Kodak Zi8 and edited with Final Cut Pro. Awarded the 2012 Stanford Lipsey Award for Multimedia Reporting.</h4><iframe src='http://player.vimeo.com/video/25999305?byline=0&amp;portrait=0' width='750' height='422' frameborder='0' webkitAllowFullScreen allowFullScreen></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function cartsvid(){
	var newEpisode = "<h4><em>Oct. 8, 2011</em> - A look at the food and atmosphere at the Mark's Carts cook-off sponsored by Le Creuset. I took the video with a Flip UltraHD and oversaw the editing.</h4><iframe src='http://player.vimeo.com/video/31704086?byline=0&amp;portrait=0' width='750' height='422' frameborder='0' webkitAllowFullScreen allowFullScreen></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function protest(){
	var newEpisode = "<h4><em>March 16, 2011</em> - Students gather on the Diag to express their disappointment in the University's choice for Spring Commencement speaker, Republican Gov. Rick Snyder. This is a look at the initial protest, march to the Fleming Administration Building and University President Mary Sue Coleman's office, and a brief interview with the protest's organizer, LSA senior Zach Goldsmith. Filmed using a Flip UltraHD and edited with Final Cut Pro.</h4><iframe src='http://player.vimeo.com/video/21150444?byline=0&amp;portrait=0' width='750' height='563' frameborder='0' webkitAllowFullScreen allowFullScreen></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function photographers(){
	var newEpisode = "<h4><em>March 1, 2011</em> - On Friday, January 28, 2011 Co-Managing Photo Editors Marissa McClain and Jed Moch and former Co-Managing Photo Editors Max Collins and Sam Wolson visited The New York Times. Later that week Marissa and Jed sat down with the Daily's Editor in Chief Stephanie Steinberg to discuss their experience. Recorded using GarageBand and edited with Final Cut Pro.</h4><br><video controls='' width='400' preload='' name='media' style='padding-top: 20px;'  src='http://www.michigandaily.com/files/NYT-podcast.mp3'></video><br><a href='http://www.michigandaily.com/files/NYT-podcast.mp3'>Click here if you can't see the player.</ a>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function kevin(){
	var newEpisode = "<h4><em>Dec. 14, 2012</em> - Final project for a class. Illustrated using Adobe Illustrator, animated using After Effects and audio edited in Soundtrack Pro 3.</h4><iframe src='http://player.vimeo.com/video/55891636?byline=0&amp;portrait=0' width='750' height='422' frameborder='0' webkitAllowFullScreen allowFullScreen></iframe>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function fballbook(){
	var newEpisode = "<h4>Website for The Michigan Daily's 176-page coffee table book. I am one of the editors of the book, the lead designer, and I managed sales and shipping for the first five months.<a class='external' href='http://book.michigandaily.com'>Michigan Football: A History of the Nation's Winningest Program</a></h4><img src='/images/fballbook_web.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function greekvine(){
	var newEpisode = "<h4>Website for a web series created by students at the University of Michigan. I designed and built the site using HTML, CSS and JavaScript to rotate the videos. <a class='external' href='http://greekvine-series.com/'>Greekvine-series.com</a></h4><img src='/images/theGreekvine-home.png' width='750px' /><img src='/images/theGreekvine-video.png' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function manners(){
	var newEpisode = "<div id='bio'><h4><em>Oct. 19, 2011</em> - Viewpoint written for The Michigan Daily's editorial page.</h4><br><p><span id='firstletter'>M</span>anners are pounded into us from the moment we can speak — when it suddenly becomes rude for a 1 year old to point.</p><p>In theory, being polite is great. Nothing is gained from being outright rude to strangers, or even friends, and it can be surprising how much an unexpected smile can do for your day. But some people cross the line by being overly polite to the point where they waste hours every week performing meaningless and often unnoticed formalities. Even worse is the unending stream of people I am forced to have passing interactions with who believe they are polite because they hold the door for me, but who then continue to walk next to their three friends, blocking the entire sidewalk. <strong><a href='http://www.michigandaily.com/opinion/viewpoint-new-miss-manners'>Continue reading...</a></strong></p></div></div>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function faking(){
	var newEpisode = "<div id='bio'><h4><em>Sept. 5, 2011</em> - Feature article, photos and design for The Michigan Daily's weekly magazine, The Statement. Article awarded the 2012 Stanford Lipsey Award for Investigative Reporting.</h4><br><p><span id='firstletter'>9</span>p.m. |  The seat of the chair is worn, and I can feel the frayed edges of the leather as my feet hang above the ground. The air is hot and sticky just inside the door.</p><p>A few tables are open, and the crowd at the bar is only one person deep. The lights are dimmed, but it doesn’t seem particularly dark. I don’t notice the volume of the other noise in the bar.</p><p>“We’re not FBI agents. We’re not supposed to be experts at spotting every little detail in a fake ID,” said Russell Dobson, picking up from where he left off. “Like you said, you can buy some of these IDs from China that look 100 percent authentic, and they’re hard to catch.”</p><p>Five minutes earlier on the Thursday of Welcome Week, I walked into Good Time Charley’s and handed Dobson, a bouncer at the popular campus bar on South University Avenue, one of my fake IDs — a driver’s license from Maine that shows I’m 22 and living at an address I never bothered to memorize.</p><p>He let me in. <strong><a href='http://www.michigandaily.com/news/faking-21'>Continue reading...</a></strong></p></div></div>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function markscarts(){
	var newEpisode = "<div id='bio'><h4><em>Oct. 9, 2011</em> - Community culture article written for The Michigan Daily's arts section.</h4><p></p><p><span id='firstletter'>S</span>aturday’s cook-off was advertised as a competition, but the six carts and throngs of visitors were all winners.</p><p>The six food carts of <a href='http://www.michigandaily.com/news/vegan-food-cart-opens-downtown'>Mark’s Carts</a> on West Washington Street went head-to-head in a cook-off sponsored by French cookware manufacturer Le Creuset on Saturday. Customers tasted free <a href='http://www.michigandaily.com/blog/biting-marks-carts-cook'>samples of each cart’s entry</a> and submitted ballots marking their favorites.</p><p>To first-time diners, the cook-off looked like a special event. But for returning visitors, the mix of students, families and other Ann Arbor locals enjoying the live music was just another afternoon at Mark’s Carts.</p><p>“It’s a favorite place of city staff for lunch during the day,” said Ann Arbor resident Jamie Kidwell, who saw a sign advertising the cook-off when she came for dinner the night before. “They did class it up a little bit, I think (the food is) still all good on any day.” <strong><a href='http://www.michigandaily.com/arts/marks-carts-cook'>Continue reading...</a></strong></p></div></div>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function stereotype(){
	var newEpisode = "<div id='bio'><h4><em>Sept. 26, 2011</em> - Viewpoint written for The Michigan Daily's editorial page.</h4><p></p><p><span id='firstletter'>A</span>fter working for The Michigan Daily for two years, I finally accepted media as a significant force in my life. Or maybe it was the more than 30 hours of television I was watching per week last year. Whatever it was, I registered for my first class in Communications Studies this semester. My friends reacted with a mix of amusement, pity and horror. Apparently, I was screwed because history has proven these classes are filled with New Yorkers.</p><p>Wait, what? I’m from New York. <strong><a href='http://www.michigandaily.com/opinion/viewpoint-new-york-stereotype'>Continue reading...</a></strong></p></div></div>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function tasteAnnArbor(){
	var newEpisode = "<div id='bio'><h4><em>June 5, 2011</em> - Article written for The Michigan Daily's food blog, The Table.</h4><p></p><p><span id='firstletter'>G</span>enerally, I prefer not to wrestle my way through throngs of people and stand in the sun just to buy lunch, but with over 40 local restaurants to choose between on Sunday, I made an exception.</p><p>The Taste of Ann Arbor, organized by Main Street Area Association, also featured seven bands and musicians in addition to the restaurants and hosted hundreds of Ann Arbor residents and visitors, all crowded into a couple of blocks on Main Street. <strong><a href='http://www.michigandaily.com/blog/m%C3%A9lange-wins-best-show-annual-taste-ann-arbor'>Continue reading...</a></strong></p></div></div>";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function features(){
	var newEpisode = "<h4><em>Sept. 7, 2011</em> - Photo and illustration for the cover of The Michigan Daily's weekly magazine, The Statement. Article awarded the 2012 Stanford Lipsey Award for Investigative Reporting. <a class='external' href='http://www.michigandaily.com/news/faking-21'>Faking 21: How bouncers catch fake IDs and underage students get past the rope</a></h4><img src='/images/faking21-cover.png' width='684px' /><hr><h4><em>June 30, 2011</em> - Jeffrey McMahon, the Michigan Marching Band Drum Major for the 2011 football season and Engineering senior, practices &quot;the bounce&quot; in Michigan Stadium on Thursday, June 30, 2011. <a class='external' href='http://www.michigandaily.com/blog/feature-photo-front-and-center'>Feature Photo: Front and Center</a></h4><img src='/images/frontcenter.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}
sports
function sports(){
	var newEpisode = "<h4><em>Aug. 9, 2011</em> - Photos from the Michigan football team's second official day of practice of the 2011 season taken for The Michigan Daily using a Nikon D300. <a class='external' href='http://www.michigandaily.com/sports/michigan-defense-focusing-effort-technique-camp'>Michigan defense focusong on effort, technique in camp</a></h4><h4>Junior quarterback Denard Robinson warms up under the watchful eye of offensive coordinator Al Borges.</h4><img src='/images/DENARDROBINSON.jpg' width='750px' /><hr><h4>Fifth-year senior defensive end Ryan Van Bergen goes up against senior defensive tackle Mike Martin in practice.</h4><img src='/images/RVBMARTIN.jpg' width='750px' /><hr><h4><em>May, 2011</em> - Photos from the end of the Michigan softball team's 2011 season taken for The Michigan Daily using a Nikon D300.</h4><h4>Senior pitcher Jordan Taylor (7) pitches against Michigan State in Ann Arbor, MI on Friday, May 13, 2011. The Wolverines won the game 8-0 in six innings off of senior Dorian Shaw's home run earning their fiftieth win of the season. The match-up was the last home game of the regular season and senior night.</h4><img src='/images/Taylor.jpg' width='750px' /><hr><h4>Freshman Caitlin Blanchard (44) attempts to stop Notre Dame from scoring in game five of regionals of the WCWS on Saturday, May 21, 2011.  Michigan came back from a five run deficit to win 9-8.</h4><img src='/images/NDscores.jpg' width='750px' /><hr><h4>Junior center fielder Bree Evans (5) scores a run off of senior Dorian Shaw's hit as the throw home heads into Michigan's dugout in game five of regionals of the WCWS against Notre Dame on Saturday, May 21, 2011.</h4><img src='/images/Mscores.jpg' width='750px' /><hr><h4><strong>Left:</strong> Sophomore shortstop Amy Knapp (1) plays in game five of regionals of the WCWS against Notre Dame on Saturday, May 21, 2011. <strong>Right:</strong> Head Coach Carol Hutchins gives senior pitcher Jordan Taylor (7) an alumni hat before the game against Michigan State in Ann Arbor, MI on Friday, May 13, 2011.</h4><img src='/images/Knapp.jpg' width='365' style='float:left; display:inline;' /><img src='/images/TaylorMom.jpg' width='365' style='float:right; display:inline;' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function football(){
	var newEpisode = "<h4><em>Aug. 9, 2011</em> - Photos from the Michigan football team's second official day of practice of the 2011 season taken for The Michigan Daily using a Nikon D300. <a class='external' href='http://www.michigandaily.com/sports/michigan-defense-focusing-effort-technique-camp'>Michigan defense focusong on effort, technique in camp</a></h4><hr><h4>Junior quarterback Denard Robinson warms up under the watchful eye of offensive coordinator Al Borges.</h4><img src='/images/DENARDROBINSON.jpg' width='750px' /><hr><h4>Michigan coach Brady Hoke surveys the field during the second day of fall camp.</h4><img src='/images/HOKE.jpg' width='750px' /><hr><h4>Fifth-year senior defensive end Ryan Van Bergen goes up against senior defensive tackle Mike Martin in practice.</h4><img src='/images/RVBMARTIN.jpg' width='750px' /><hr><h4>Junior quarterback Denard Robinson and offensive coordinator Al Borges discuss the offense during practice outside Al Glick Fieldhouse.</h4><img src='/images/DENARDBORGES.jpg' width='750px' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}

function softball(){
	var newEpisode = "<h4><em>May, 2011</em> - Photos from the end of the Michigan softball team's 2011 season taken for The Michigan Daily using a Nikon D300.</h4><hr><h4>Senior pitcher Jordan Taylor (7) pitches against Michigan State in Ann Arbor, MI on Friday, May 13, 2011. The Wolverines won the game 8-0 in six innings off of senior Dorian Shaw's home run earning their fiftieth win of the season. The match-up was the last home game of the regular season and senior night.</h4><img src='/images/Taylor.jpg' width='750px' /><hr><h4>Freshman Caitlin Blanchard (44) attempts to stop Notre Dame from scoring in game five of regionals of the WCWS on Saturday, May 21, 2011.  Michigan came back from a five run deficit to win 9-8.</h4><img src='/images/NDscores.jpg' width='750px' /><hr><h4>Junior center fielder Bree Evans (5) scores a run off of senior Dorian Shaw's hit as the throw home heads into Michigan's dugout in game five of regionals of the WCWS against Notre Dame on Saturday, May 21, 2011.</h4><img src='/images/Mscores.jpg' width='750px' /><hr><h4><strong>Left:</strong> Sophomore shortstop Amy Knapp (1) plays in game five of regionals of the WCWS against Notre Dame on Saturday, May 21, 2011. <strong>Right:</strong> Head Coach Carol Hutchins gives senior pitcher Jordan Taylor (7) an alumni hat before the game against Michigan State in Ann Arbor, MI on Friday, May 13, 2011.</h4><img src='/images/Knapp.jpg' width='365' style='float:left; display:inline;' /><img src='/images/TaylorMom.jpg' width='365' style='float:right; display:inline;' />";
	document.getElementById('changeImage').innerHTML = newEpisode;
}