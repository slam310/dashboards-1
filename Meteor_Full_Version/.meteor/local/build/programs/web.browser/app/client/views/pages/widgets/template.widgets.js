(function(){
Template.__checkName("widgets");
Template["widgets"] = new Template("Template.widgets", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Widgets")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-3">\n                <div class="widget style1">\n                    <div class="row">\n                        <div class="col-xs-4 text-center">\n                            <i class="fa fa-trophy fa-5x"></i>\n                        </div>\n                        <div class="col-xs-8 text-right">\n                            <span> Today income </span>\n                            <h2 class="font-bold">$ 4,232</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="widget style1 navy-bg">\n                    <div class="row">\n                        <div class="col-xs-4">\n                            <i class="fa fa-cloud fa-5x"></i>\n                        </div>\n                        <div class="col-xs-8 text-right">\n                            <span> Today degrees </span>\n                            <h2 class="font-bold">26\'C</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="widget style1 lazur-bg">\n                    <div class="row">\n                        <div class="col-xs-4">\n                            <i class="fa fa-envelope-o fa-5x"></i>\n                        </div>\n                        <div class="col-xs-8 text-right">\n                            <span> New messages </span>\n                            <h2 class="font-bold">260</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="widget style1 yellow-bg">\n                    <div class="row">\n                        <div class="col-xs-4">\n                            <i class="fa fa-music fa-5x"></i>\n                        </div>\n                        <div class="col-xs-8 text-right">\n                            <span> New albums </span>\n                            <h2 class="font-bold">12</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-6">\n                <div class="widget navy-bg no-padding">\n                    <div class="p-m">\n                        <h1 class="m-xs">$ 1,540</h1>\n\n                        <h3 class="font-bold no-margins">\n                            Annual income\n                        </h3>\n                        <small>Income form project Alpha.</small>\n                    </div>\n                    <div class="flot-chart">\n                        <div class="flot-chart-content" id="flot-chart1"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="widget lazur-bg no-padding">\n                    <div class="p-m">\n                        <h1 class="m-xs">$ 210,660</h1>\n\n                        <h3 class="font-bold no-margins">\n                            Monthly income\n                        </h3>\n                        <small>Income form project Beta.</small>\n                    </div>\n                    <div class="flot-chart">\n                        <div class="flot-chart-content" id="flot-chart2"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="widget yellw-bg no-padding">\n                    <div class="p-m">\n                        <h1 class="m-xs">$ 50,992</h1>\n\n                        <h3 class="font-bold no-margins">\n                            Half-year revenue margin\n                        </h3>\n                        <small>Sales marketing.</small>\n                    </div>\n                    <div class="flot-chart">\n                        <div class="flot-chart-content" id="flot-chart3"></div>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-2">\n                <div class="widget style1 navy-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-user fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">217</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget style1 navy-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-thumbs-up fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">400</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget style1 navy-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-rss fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">10</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget style1 lazur-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-phone fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">120</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget style1 lazur-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-euro fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">462</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget style1 yellow-bg">\n                    <div class="row vertical-align">\n                        <div class="col-xs-3">\n                            <i class="fa fa-shield fa-3x"></i>\n                        </div>\n                        <div class="col-xs-9 text-right">\n                            <h2 class="font-bold">610</h2>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-4">\n                <div class="widget-head-color-box navy-bg p-lg text-center">\n                    <div class="m-b-md">\n                        <h2 class="font-bold no-margins">\n                            Alex Smith\n                        </h2>\n                        <small>Founder of Groupeq</small>\n                    </div>\n                    <img src="img/a4.jpg" class="img-circle circle-border m-b-md" alt="profile">\n                    <div>\n                        <span>100 Tweets</span> |\n                        <span>350 Following</span> |\n                        <span>610 Followers</span>\n                    </div>\n                </div>\n                <div class="widget-text-box">\n                    <h4 class="media-heading">Alex Smith</h4>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    <div class="text-right">\n                        <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>\n                        <a class="btn btn-xs btn-primary"><i class="fa fa-heart"></i> Love</a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget navy-bg p-lg text-center">\n                    <div class="m-b-md">\n                        <i class="fa fa-shield fa-4x"></i>\n                        <h1 class="m-xs">456</h1>\n                        <h3 class="font-bold no-margins">\n                            Shield\n                        </h3>\n                        <small>power</small>\n                    </div>\n                </div>\n                <div class="widget  p-lg text-center">\n                    <div class="m-b-md">\n                        <i class="fa fa-flash fa-4x"></i>\n                        <h1 class="m-xs">612</h1>\n                        <h3 class="font-bold no-margins">\n                            Thunder\n                        </h3>\n                        <small>amount</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4">\n                <div class="widget lazur-bg p-xl">\n\n                    <h2>\n                        Janet Smith\n                    </h2>\n                    <ul class="list-unstyled m-t-md">\n                        <li>\n                            <span class="fa fa-envelope m-r-xs"></span>\n                            <label>Email:</label>\n                            mike@mail.com\n                        </li>\n                        <li>\n                            <span class="fa fa-home m-r-xs"></span>\n                            <label>Address:</label>\n                            Street 200, Avenue 10\n                        </li>\n                        <li>\n                            <span class="fa fa-phone m-r-xs"></span>\n                            <label>Contact:</label>\n                            (+121) 678 3462\n                        </li>\n                    </ul>\n\n                </div>\n                <div class="widget red-bg p-lg text-center">\n                    <div class="m-b-md">\n                        <i class="fa fa-bell fa-4x"></i>\n                        <h1 class="m-xs">47</h1>\n                        <h3 class="font-bold no-margins">\n                            Notification\n                        </h3>\n                        <small>We detect the error.</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-2">\n                <div class="widget yellow-bg p-lg text-center">\n                    <div class="m-b-md">\n                        <i class="fa fa-thumbs-up fa-4x"></i>\n                        <h1 class="m-xs">520</h1>\n                        <h3 class="font-bold no-margins">\n                            Likes\n                        </h3>\n                        <small>amount</small>\n                    </div>\n                </div>\n                <div class="widget yellow-bg p-lg text-center">\n                    <div class="m-b-md">\n                        <i class="fa fa-warning fa-4x"></i>\n                        <h1 class="m-xs">Alarm</h1>\n                        <h3 class="font-bold no-margins">\n                            Do\n                        </h3>\n                        <small>something</small>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.DIV({
    "class": "row m-t-lg"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw('<div>\n                            <div class="chat-activity-list">\n\n                                <div class="chat-element">\n                                    <a href="#" class="pull-left">\n                                        <img alt="image" class="img-circle" src="img/a2.jpg">\n                                    </a>\n                                    <div class="media-body ">\n                                        <small class="pull-right text-navy">1m ago</small>\n                                        <strong>Mike Smith</strong>\n                                        <p class="m-b-xs">\n                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                                        </p>\n                                        <small class="text-muted">Today 4:21 pm - 12.06.2014</small>\n                                    </div>\n                                </div>\n\n                                <div class="chat-element right">\n                                    <a href="#" class="pull-right">\n                                        <img alt="image" class="img-circle" src="img/a4.jpg">\n                                    </a>\n                                    <div class="media-body text-right ">\n                                        <small class="pull-left">5m ago</small>\n                                        <strong>John Smith</strong>\n                                        <p class="m-b-xs">\n                                            Lorem Ipsum is simply dummy text of the printing.\n                                        </p>\n                                        <small class="text-muted">Today 4:21 pm - 12.06.2014</small>\n                                    </div>\n                                </div>\n\n                                <div class="chat-element ">\n                                    <a href="#" class="pull-left">\n                                        <img alt="image" class="img-circle" src="img/a2.jpg">\n                                    </a>\n                                    <div class="media-body ">\n                                        <small class="pull-right">2h ago</small>\n                                        <strong>Mike Smith</strong>\n                                        <p class="m-b-xs">\n                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n                                        </p>\n                                        <small class="text-muted">Today 4:21 pm - 12.06.2014</small>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>'), "\n                        ", HTML.DIV({
    "class": "chat-form"
  }, "\n                            ", HTML.FORM({
    role: "form"
  }, "\n                                ", HTML.DIV({
    "class": "form-group"
  }, "\n                                    ", HTML.TEXTAREA({
    "class": "form-control",
    placeholder: "Message"
  }), "\n                                "), "\n                                ", HTML.Raw('<div class="text-right">\n                                    <button type="submit" class="btn btn-sm btn-primary m-t-n-xs"><strong>Send message</strong></button>\n                                </div>'), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV("\n                    ", HTML.TABLE({
    "class": "table"
  }, "\n                        ", HTML.TBODY("\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-danger m-r-sm"
  }, "12"), "\n                                Total messages\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-primary m-r-sm"
  }, "28"), "\n                                Posts\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-info m-r-sm"
  }, "15"), "\n                                Comments\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-info m-r-sm"
  }, "20"), "\n                                News\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-success m-r-sm"
  }, "40"), "\n                                Likes\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-danger m-r-sm"
  }, "30"), "\n                                Notifications\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-warning m-r-sm"
  }, "20"), "\n                                Albums\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-default m-r-sm"
  }, "40"), "\n                                Groups\n                            "), "\n                            ", HTML.TD("\n                                ", HTML.BUTTON({
    type: "button",
    "class": "btn btn-warning m-r-sm"
  }, "30"), "\n                                Permissions\n                            "), "\n                        "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.Raw('<div>\n                    <div class="row">\n                        <div class="col-md-6">\n                            <div class="ibox-content text-center">\n                                <h1>Nicki Smith</h1>\n                                <div class="m-b-sm">\n                                    <img alt="image" class="img-circle" src="img/a8.jpg">\n                                </div>\n                                <p class="font-bold">Consectetur adipisicing</p>\n\n                                <div class="text-center">\n                                    <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>\n                                    <a class="btn btn-xs btn-primary"><i class="fa fa-heart"></i> Love</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="col-md-6">\n                            <div class="ibox-content">\n                                <div>\n                                    <div>\n                                        <span>Memory</span>\n                                        <small class="pull-right">10/200 GB</small>\n                                    </div>\n                                    <div class="progress progress-small">\n                                        <div style="width: 60%;" class="progress-bar"></div>\n                                    </div>\n\n                                    <div>\n                                        <span>Bandwidth</span>\n                                        <small class="pull-right">20 GB</small>\n                                    </div>\n                                    <div class="progress progress-small">\n                                        <div style="width: 50%;" class="progress-bar"></div>\n                                    </div>\n\n                                    <div>\n                                        <span>Activity</span>\n                                        <small class="pull-right">73%</small>\n                                    </div>\n                                    <div class="progress progress-small">\n                                        <div style="width: 40%;" class="progress-bar"></div>\n                                    </div>\n\n                                    <div>\n                                        <span>FTP</span>\n                                        <small class="pull-right">400 GB</small>\n                                    </div>\n                                    <div class="progress progress-small">\n                                        <div style="width: 20%;" class="progress-bar progress-bar-danger"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>'), "\n            "), "\n        "), "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-6">\n                <div class="ibox-content">\n                    <h2>TODO List</h2>\n                    <small>This is example of task list</small>\n                    <ul class="todo-list m-t">\n                        <li>\n                            <input type="checkbox" value="" name="" class="i-checks">\n                            <span class="m-l-xs">Buy a milk</span>\n                            <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 mins</small>\n                        </li>\n                        <li>\n                            <input type="checkbox" value="" name="" class="i-checks" checked="">\n                            <span class="m-l-xs">Go to shop and find some products.</span>\n                            <small class="label label-info"><i class="fa fa-clock-o"></i> 3 mins</small>\n                        </li>\n                        <li>\n                            <input type="checkbox" value="" name="" class="i-checks">\n                            <span class="m-l-xs">Send documents to Mike</span>\n                            <small class="label label-warning"><i class="fa fa-clock-o"></i> 2 mins</small>\n                        </li>\n                        <li>\n                            <input type="checkbox" value="" name="" class="i-checks">\n                            <span class="m-l-xs">Go to the doctor dr Smith</span>\n                            <small class="label label-danger"><i class="fa fa-clock-o"></i> 42 mins</small>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class="col-lg-6">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-content">\n                        <h2>TODO Small version</h2>\n                        <small>This is example of small version of todo list</small>\n                        <ul class="todo-list m-t small-list">\n                            <li>\n                                <div class="checkbox">\n                                    <input type="checkbox" id="checkbox1" checked="">\n                                    <label for="checkbox1">\n                                        Buy a milk\n                                    </label>\n                                </div>\n                            </li>\n                            <li>\n                                <div class="checkbox">\n                                    <input type="checkbox" id="checkbox2">\n                                    <label for="checkbox2">\n                                        Go to shop and find some products\n                                    </label>\n                                </div>\n\n                            </li>\n                            <li>\n                                <div class="checkbox">\n                                    <input type="checkbox" id="checkbox3">\n                                    <label for="checkbox3">\n                                        Send documents to Mike\n                                        <small class="label label-primary"><i class="fa fa-clock-o"></i> 1 mins</small>\n                                    </label>\n                                </div>\n\n                            </li>\n                            <li>\n                                <div class="checkbox">\n                                    <input type="checkbox" id="checkbox4" checked="">\n                                    <label for="checkbox4">\n                                        Go to the doctor dr Smith\n                                    </label>\n                                </div>\n\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.Raw('<div class="row m-t-lg">\n            <div class="col-lg-12">\n                <div class="ibox-content">\n                    <h2>Word map</h2>\n                    <small>This is simple example of map</small>\n                    <div id="world-map" style="height: 300px;"></div>\n                </div>\n            </div>\n\n        </div>'), "\n\n    ") ];
}));

}).call(this);