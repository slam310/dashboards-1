(function(){
Template.__checkName("article");
Template["article"] = new Template("Template.article", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Article"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight article">\n        <div class="row">\n            <div class="col-lg-10 col-lg-offset-1">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <div class="pull-right">\n                            <button class="btn btn-white btn-xs" type="button">Model</button>\n                            <button class="btn btn-white btn-xs" type="button">Publishing</button>\n                            <button class="btn btn-white btn-xs" type="button">Modern</button>\n                        </div>\n                        <div class="text-center article-title">\n                            <span class="text-muted"><i class="fa fa-clock-o"></i> 28th Oct 2015</span>\n\n                            <h1>\n                                Behind the word mountains\n                            </h1>\n                        </div>\n                        <p>\n                            Many desktop publishing packages and web page editors now use <strong>Lorem Ipsum as their\n                            default model text</strong>, and a search for \'lorem ipsum\' will uncover many web\n                        </p>\n\n                        <p>\n                            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in\n                            his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a\n                            little he could see his brown belly, slightly domed and divided by arches into stiff\n                            sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.\n                            His many legs, pitifully thin compared with the size of the rest of him, waved about\n                            helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a\n                            proper human room although a little too small, lay peacefully between its four familiar\n                            walls. A collection of textile samples lay spread out on the table - Samsa was a travelling\n                            salesman - and above it there hung a picture that he had recently cut out of an illustrated\n                            magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and\n                            fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm\n                            towards the viewer. Gregor then turned to look out the window at the dull weather. Drops\n                        </p>\n\n                        <p>\n                            <i>\n                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\n                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of\n                                the Semantics, a large language ocean. A small river named Duden flows by their place\n                                and supplies it with the necessary regelialia. It is a paradisematic country, in which\n                                roasted parts of sentences fly into your mouth.\n                            </i>\n                        </p>\n\n                        <p>\n                            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild\n                            Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her\n                            seven versalia, put her initial into the belt and made herself on the way. When she reached\n                            the first hills of the Italic Mountains, she had a last view back on the skyline of her\n                            hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road,\n                            the Line Lane. Pityful a rethoric question ran over her cheek,\n                        </p>\n\n                        <p>\n                            Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz\n                            Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job,\n                            kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx\n                            zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy\n                            fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick\n                            jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in\n                            fog. Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game. Woven silk pyjamas exchanged for\n                            blue quartz. Brawny gods just\n                        </p>\n\n                        <p>\n                            Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting\n                            zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV\n                            quiz. How quickly daft jumping zebras vex.\n                        </p>\n                        <hr>\n                        <div class="row">\n                            <div class="col-md-6">\n                                <h5>Tags:</h5>\n                                <button class="btn btn-primary btn-xs" type="button">Model</button>\n                                <button class="btn btn-white btn-xs" type="button">Publishing</button>\n                            </div>\n                            <div class="col-md-6">\n                                <div class="small text-right">\n                                    <h5>Stats:</h5>\n\n                                    <div><i class="fa fa-comments-o"> </i> 56 comments</div>\n                                    <i class="fa fa-eye"> </i> 144 views\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n    </div>') ];
}));

}).call(this);