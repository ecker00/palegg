this.HBS=this.HBS||{},this.HBS["about-main"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div class="content">\n  <div class="text-wrap">\n    <p>\n      A little lunch love project to share our love for unique meals.\n      Share your ideas and vote for your favourites.\n    </p>\n    <p>\n      This page is just as much about the tech as it\'s about the food.\n      See the source code for this project on <a href="https://githubt.com/">GitHub</a>\n    </p>\n    <h2 style="font-size: 1em">— Christer & Clare</h2>\n  </div>\n</div>'},useData:!0}),this.HBS.error=Handlebars.template({1:function(container,depth0,helpers,partials,data){var stack1;return"    "+(null!=(stack1=container.lambda(depth0,depth0))?stack1:"")+"\n"},3:function(container,depth0,helpers,partials,data){return'    Sorry, something went wrong.\n    <a href="javascript:location.reload();">Reload?</a>\n'},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1;return'<div class="error">\n'+(null!=(stack1=helpers.if.call(null!=depth0?depth0:container.nullContext||{},depth0,{name:"if",hash:{},fn:container.program(1,data,0),inverse:container.program(3,data,0),data:data}))?stack1:"")+"</div>\n\n"},useData:!0}),this.HBS["home-loadMore"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div class="loadMore" style="opacity: 0;" data-event="loadMore">\n  <img src="/img/loading.svg">\n  <h2 style="margin: 0;">Loading…</h2>\n</div>'},useData:!0}),this.HBS["home-main"]=Handlebars.template({1:function(container,depth0,helpers,partials,data){var stack1,alias1=null!=depth0?depth0:container.nullContext||{};return'    <div class="meals" data-target="meals">\n'+(null!=(stack1=helpers.each.call(alias1,null!=(stack1=null!=depth0?depth0.getMeals:depth0)?stack1.items:stack1,{name:"each",hash:{},fn:container.program(2,data,0),inverse:container.noop,data:data}))?stack1:"")+(null!=(stack1=helpers.if.call(alias1,null!=(stack1=null!=depth0?depth0.getMeals:depth0)?stack1.next:stack1,{name:"if",hash:{},fn:container.program(4,data,0),inverse:container.noop,data:data}))?stack1:"")+"    </div>\n"},2:function(container,depth0,helpers,partials,data){var stack1;return null!=(stack1=container.invokePartial(partials["home-meal"],depth0,{name:"home-meal",data:data,indent:"        ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:""},4:function(container,depth0,helpers,partials,data){var stack1;return null!=(stack1=container.invokePartial(partials["home-loadMore"],depth0,{name:"home-loadMore",data:data,indent:"        ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:""},6:function(container,depth0,helpers,partials,data){return'    <h2>No submissions yet</h2>\n    <p class="text-center">\n      Maybe you will <a href="/?create">add</a> the first one?\n    </p>\n'},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1;return'<p class="text-wrap">\n\tThis is the place to visit when your feeling hangry\n\tand you\'re wondering what to make for lunch!\n</p>\n<div class="content">\n'+(null!=(stack1=helpers.if.call(null!=depth0?depth0:container.nullContext||{},null!=(stack1=null!=depth0?depth0.getMeals:depth0)?stack1.items:stack1,{name:"if",hash:{},fn:container.program(1,data,0),inverse:container.program(6,data,0),data:data}))?stack1:"")+"</div>\n\n"},usePartial:!0,useData:!0}),this.HBS["home-meal"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1,helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return'<div class="meal">\n  <div class="backSide" style="display: none;">\n    '+(null!=(stack1=(helpers.toParagraph||depth0&&depth0.toParagraph||alias2).call(alias1,null!=depth0?depth0.description:depth0,{name:"toParagraph",hash:{},data:data}))?stack1:"")+'\n  </div>\n  <div class="frontSide">\n    <figure class="imageWrap mayfair" style="background-image:url(/uploads/'+alias4((helper=null!=(helper=helpers.image||(null!=depth0?depth0.image:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"image",hash:{},data:data}):helper))+')">\n      <h2>'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+'</h2>\n    </figure>\n  </div>\n  <div class="details" data-hbs="home-mealDetails#'+alias4((helper=null!=(helper=helpers.mealID||(null!=depth0?depth0.mealID:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"mealID",hash:{},data:data}):helper))+'" data-mealID="'+alias4((helper=null!=(helper=helpers.mealID||(null!=depth0?depth0.mealID:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"mealID",hash:{},data:data}):helper))+'">\n'+(null!=(stack1=container.invokePartial(partials["home-mealDetails"],depth0,{name:"home-mealDetails",data:data,indent:"    ",helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+"  </div>\n</div>\n\n"},usePartial:!0,useData:!0}),this.HBS["home-mealDetails"]=Handlebars.template({1:function(container,depth0,helpers,partials,data){return"voted"},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1,helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return'<span class="author">By '+alias4((helper=null!=(helper=helpers.author||(null!=depth0?depth0.author:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"author",hash:{},data:data}):helper))+'</span>\n<span class="votes">'+alias4((helper=null!=(helper=helpers.votes||(null!=depth0?depth0.votes:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"votes",hash:{},data:data}):helper))+'</span>\n<img class="heart '+(null!=(stack1=helpers.if.call(alias1,null!=depth0?depth0.voted:depth0,{name:"if",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+'" src="img/heart.svg" data-btn="vote">\n\n'},useData:!0}),this.HBS.loading=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div class="loading">\n  <img class="heart" src="img/loading.svg">\n  Loading…\n</div>\n'},useData:!0}),this.HBS["newMeal-form"]=Handlebars.template({1:function(container,depth0,helpers,partials,data){var stack1;return'<div class="error">'+container.escapeExpression(container.lambda(null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.error:stack1,depth0))+"</div>"},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1,alias1=container.lambda,alias2=container.escapeExpression,alias3=null!=depth0?depth0:container.nullContext||{},alias4=helpers.helperMissing;return'<form method="POST" enctype="multipart/form-data">\n  <input type="hidden" name="api" value="newMeal">\n  \n  <label for="title">Name your combo</label>\n  <input id="title" type="text" name="title" value="'+alias2(alias1(null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.title:stack1,depth0))+'" placeholder="The awesome souce" required>\n  '+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias4).call(alias3,null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.errorTag:stack1,"==","title",{name:"logic",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+'\n  \n  <label for="description">How to conjure</label>\n  <textarea id="description" name="description" placeholder="Tell us how to put this masterpeace together" required>'+alias2(alias1(null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.description:stack1,depth0))+"</textarea>\n  "+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias4).call(alias3,null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.errorTag:stack1,"==","description",{name:"logic",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+'\n  \n  <label>Snap the beauty</label>\n  <div style="position: relative;">\n    <input type="hidden" name="MAX_FILE_SIZE" value="10000000">\n    <label for="picture" class="button" data-text="Upload a photo">Upload a photo</label>\n    <input id="picture" name="picture" type="file" required>\n    '+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias4).call(alias3,null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.errorTag:stack1,"==","picture",{name:"logic",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+'\n  </div>\n  \n  <label for="author">Signed</label>\n  <input id="author" type="text" name="author" value="'+alias2(alias1(null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.author:stack1,depth0))+'" placeholder="Creator of this masterpeace" required>\n  '+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias4).call(alias3,null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.errorTag:stack1,"==","author",{name:"logic",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+'\n  \n  <label>Finished</label>\n  <button type="submit">Share your magic</button>\n  <br>\n</form>'},useData:!0}),this.HBS["newMeal-main"]=Handlebars.template({1:function(container,depth0,helpers,partials,data){var stack1;return'    <div data-hbs="newMeal-success">'+(null!=(stack1=container.invokePartial(partials["newMeal-success"],depth0,{name:"newMeal-success",data:data,helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+"</div>\n"},3:function(container,depth0,helpers,partials,data){var stack1;return'    <div data-hbs="newMeal-form">'+(null!=(stack1=container.invokePartial(partials["newMeal-form"],depth0,{name:"newMeal-form",data:data,helpers:helpers,partials:partials,decorators:container.decorators}))?stack1:"")+"</div>\n"},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1;return'<div class="content">\n'+(null!=(stack1=helpers.if.call(null!=depth0?depth0:container.nullContext||{},null!=(stack1=null!=(stack1=null!=depth0?depth0.postResult:depth0)?stack1.newMeal:stack1)?stack1.success:stack1,{name:"if",hash:{},fn:container.program(1,data,0),inverse:container.program(3,data,0),data:data}))?stack1:"")+"</div>\n\n"},usePartial:!0,useData:!0}),this.HBS["newMeal-success"]=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<h2>Done!</h2>\n<p class="text-wrap">\n  Thank you for sharing your awesome lunch idea with us.\n  Head back to the <a href="/">overview</a> and vote for your favourites!\n</p>\n<br>\n<div class="text-center">\n  <a class="button fit" href="/">Home</a>\n</div>\n<br>\n\n'},useData:!0}),this.HBS.template=Handlebars.template({1:function(container,depth0,helpers,partials,data){return' class="active"'},3:function(container,depth0,helpers,partials,data){return'class="active"'},compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1,helper,alias1=container.escapeExpression,alias2=null!=depth0?depth0:container.nullContext||{},alias3=helpers.helperMissing;return'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Pålegg – '+alias1(container.lambda(null!=(stack1=null!=depth0?depth0.currentPage:depth0)?stack1.title:stack1,depth0))+'</title>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<meta name="keywords" content="lunch ideas,spread, pålegg">\n\t\t<meta name="description" content="The website for sharing your lunch making ideas">\n    <link rel="stylesheet" href="/style.css?v='+alias1((helper=null!=(helper=helpers.version||(null!=depth0?depth0.version:depth0))?helper:alias3,"function"==typeof helper?helper.call(alias2,{name:"version",hash:{},data:data}):helper))+'">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css">\n\t\t<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"><\/script>\n\t\t<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.runtime.min.js"><\/script>\n    <script src="/script.js?v='+alias1((helper=null!=(helper=helpers.version||(null!=depth0?depth0.version:depth0))?helper:alias3,"function"==typeof helper?helper.call(alias2,{name:"version",hash:{},data:data}):helper))+'"><\/script>\n    <script>HBS.defaultData = '+(null!=(helper=null!=(helper=helpers.defaultData||(null!=depth0?depth0.defaultData:depth0))?helper:alias3,stack1="function"==typeof helper?helper.call(alias2,{name:"defaultData",hash:{},data:data}):helper)?stack1:"")+"<\/script>\n  </head>\n  \n  <body>\n    <header>\n      <nav>\n        <a "+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias3).call(alias2,null!=(stack1=null!=depth0?depth0.currentPage:depth0)?stack1.name:stack1,"==","home",{name:"logic",hash:{},fn:container.program(1,data,0),inverse:container.noop,data:data}))?stack1:"")+' href="/">Lunches</a>\n        <a '+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias3).call(alias2,null!=(stack1=null!=depth0?depth0.currentPage:depth0)?stack1.name:stack1,"==","create",{name:"logic",hash:{},fn:container.program(3,data,0),inverse:container.noop,data:data}))?stack1:"")+' href="/?create">Create</a>\n        <a '+(null!=(stack1=(helpers.logic||depth0&&depth0.logic||alias3).call(alias2,null!=(stack1=null!=depth0?depth0.currentPage:depth0)?stack1.name:stack1,"==","about",{name:"logic",hash:{},fn:container.program(3,data,0),inverse:container.noop,data:data}))?stack1:"")+' href="/?about">About</a>\n      </nav>\n      <h1 class="logo">Pålegg</h1>\n    </header>\n    '+(null!=(stack1=(helpers.include||depth0&&depth0.include||alias3).call(alias2,null!=(stack1=null!=depth0?depth0.currentPage:depth0)?stack1.hbs:stack1,{name:"include",hash:{},data:data}))?stack1:"")+'\n\t\t<footer>\n\t\t\t<a href="https://snuti.net/" target="_blank">Snuti.net</a>\n\t\t</footer>\n  </body>\n</html>\n\n'},useData:!0});var api={};api.query=function(queries,loadingCancel){return $.ajax({url:"/index.php",dataType:"json",type:"post",data:{api:queries}}).fail(function(jqXHR,textStatus,errorThrown){console.log("API Error:",textStatus,errorThrown,jqXHR.responseText)}).done(function(data){if(loadingCancel)var targetID=loadingCancel();for(var key in data)if(data[key]&&data[key].error)throw loadingCancel&&$('[data-hbs="'+targetID+'"]').html(HBS.error(data[key])),"API Error: "+data[key].error})};for(var tag in HBS)Handlebars.registerPartial(tag,HBS[tag]);HBS.render=function(tag,data,target){if(target||(target='[data-hbs="'+tag+'"]'),(data=Object.assign(data,HBS.defaultData)).error)$(target).html(HBS.error(data));else{var template=tag.split("#")[0];if(HBS[template])console.log(target),$(target).html(HBS[template](data));else{var errorMsg='HBS Render: Template "'+template+'" does not exsist.';$(target).html(HBS.error({error:errorMsg})),console.log(errorMsg)}}HBS.rebind()},HBS.append=function(tag,data,target){target||(target='[data-hbs="'+tag+'"]'),data.error?$(target).append(HBS.error(data)):$(target).append(HBS[tag](data)),HBS.rebind()},HBS.events=[],HBS.bind=function(selector,action,callback){HBS.events.push({selector:selector,action:action,callback:callback})},HBS.clickDelay=0,HBS.rebind=function(){HBS.events.forEach(function(event,i){"run"==event.action?event.callback.call(this):"click"==event.action?($(event.selector).off(event.action),$(event.selector).on(event.action,function(e){HBS.clickDelay<Date.now()&&(HBS.clickDelay=Date.now()+500,event.callback.call(this,e))})):($(event.selector).off(event.action,event.callback),$(event.selector).on(event.action,event.callback))})},$(function(){setTimeout(HBS.rebind,100)}),Handlebars.registerHelper("logic",function(v1,operator,v2,options){switch(operator){case"==":if(v1==v2)return options.fn(this);break;case"===":if(v1===v2)return options.fn(this);break;case"!=":if(v1!=v2)return options.fn(this);break;case"!==":if(v1!==v2)return options.fn(this);break;case"<":if(v1<v2)return options.fn(this);break;case"<=":if(v1<=v2)return options.fn(this);break;case">":if(v1>v2)return options.fn(this);break;case">=":if(v1>=v2)return options.fn(this);break;case"&&":if(v1&&v2)return options.fn(this);break;case"||":if(v1||v2)return options.fn(this)}if(options.inverse)return options.inverse(this)}),Handlebars.registerHelper("include",function(tag,context){return console.log(context),HBS.render(tag,context._this)}),Handlebars.registerHelper("json",function(data,context){return JSON.stringify(data)}),Handlebars.registerHelper("concat",function(){for(var values=[],i=0;i<arguments.length;i++){var v=arguments[i];if(i+1==arguments.length);else values.push(v)}return values.join("")}),Handlebars.registerHelper("deepLookup",function(){for(var keys=[],i=0;i<arguments.length;i++){var a=arguments[i];if(i+1!=arguments.length)if(0!=i)i>0&&keys.push(a);else var input=a;else;}for(i=0;i<keys.length;i++){var key=keys[i];if(void 0===input[key])return null;input=input[key]}return input}),Handlebars.registerHelper("calc",function(v1,operator,v2,context){var v=0;switch(operator){case"+":v=parseFloat(v1)+parseFloat(v2);break;case"-":v=parseFloat(v1)-parseFloat(v2);break;case"*":v=parseFloat(v1)*parseFloat(v2);break;case"/":v=parseFloat(v1)/parseFloat(v2)}return v===1/0&&(v=0),isNaN(v)&&(v=0),v}),Handlebars.registerHelper("toParagraph",function(str,context){return str&&(str=(str=str.replace(/\n/g,"</p><p>")).replace("<p></p>","")),"<p>"+str+"</p>"}),HBS.setLoading=function(targetID,loadingStyle){loadingStyle=void 0!==loadingStyle?loadingStyle:"loading";var loadingTimer=setTimeout(function(){$('[data-hbs="'+targetID+'"]').html(HBS[loadingStyle]({})),loadingTimer=setTimeout(function(){$('[data-hbs="'+targetID+'"]').html(HBS.error({}))},15e3)},1e3);return function(){return clearTimeout(loadingTimer),targetID}},HBS.quickLoading=function(target,type,permanent){var initial;"select"==type?(initial=$(target).html(),$(target).html("<a>Loading…</a>")):"val"==type?(initial=$(target).val(),$(target).val("<a>Loading…</a>")):"str"==type?(initial=$(target).html(),$(target).html("<a>Loading…</a>")):"img"==type?(initial=$(target).attr("src"),$(target).attr("src","/img/loading.svg")):(initial=$(target).html(),$(target).html(HBS.loading({})));var timeoutTimer=setTimeout(function(){"select"==type?$(target).html("<option>Sorry, something went wrong.</option>"):"val"==type?$(target).val("Sorry, something went wrong."):"str"==type?$(target).html("Sorry, something went wrong."):$(target).html(HBS.error({}))},15e3);return function(){return clearTimeout(timeoutTimer),permanent||("select"==type?$(target).html(initial):"val"==type?$(target).val(initial):"str"==type?$(target).html(initial):"img"==type?$(target).attr("src",initial):$(target).html(initial)),target}},$(function(){function updateDetails(mealID){var queries={getMeal:{mealID:mealID}},loadingCancel=HBS.quickLoading(this,"img");api.query(queries,loadingCancel).done(function(data){HBS.render("home-mealDetails#"+mealID,data.getMeal)})}function loadMoreInView(){if(loadMore.length){var scrollPos=$(window).scrollTop()+$(window).height();$(loadMore).offset().top<=scrollPos&&!loadingMore&&(loadingMore=!0,loadingOffset+=20,loadMoreMeals())}}function loadMoreMeals(){var queries={getMeals:{offset:loadingOffset}};$(loadMore).css("opacity",1);var loadingCancel=HBS.quickLoading(this,"img");api.query(queries,loadingCancel).done(function(data){$(loadMore).remove();for(i in data.getMeals.items)HBS.append("home-meal",data.getMeals.items[i],'[data-target="meals"]');data.getMeals.next&&HBS.append("home-loadMore",{},'[data-target="meals"]'),loadMore=$('[data-event="loadMore"]'),loadingMore=!1})}HBS.bind(".frontSide, .backSide","click",function(){var parent=$(this).closest(".meal"),frontSide=parent.find(".frontSide"),backSide=parent.find(".backSide");$(this).hasClass("frontSide")?($(".backSide").not(backSide).slideUp(400),$(".frontSide").not(frontSide).slideDown(400),$(frontSide).slideUp(400),$(backSide).slideDown(400)):($(frontSide).slideDown(400),$(backSide).slideUp(400))}),HBS.bind('[data-btn="vote"]',"click",function(){var mealID=$(this).closest("[data-mealID]").data("mealid"),queries={voteMeal:{mealID:mealID}},loadingCancel=HBS.quickLoading(this,"img");api.query(queries,loadingCancel).done(function(data){updateDetails(mealID)})});var loadingOffset=0,loadingMore=!1,loadMore=$('[data-event="loadMore"]');$(window).on("scroll",loadMoreInView)}),$(function(){$("input:file[id=picture]").change(function(){var ID=$(this).attr("id"),label=$('label[for="'+ID+'"]'),path=$(this).val().replace("C:\\fakepath\\","");path?$(label).html(path):$(label).html($(label).data("text"))})});
//# sourceMappingURL=script.js.map