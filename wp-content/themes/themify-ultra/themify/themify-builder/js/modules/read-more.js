(($,e)=>{"use strict";e.loadCss(ThemifyBuilderModuleJs.cssUrl+"more-text"),e.body.on("click",".module-text-more",(function(e){e.preventDefault();const t=$(this),i=t.parent().find(".more-text"),l=function(){$(this).closest(".module").trigger("resize")};t.hasClass("tb_text_less_link")?(t.removeClass("tb_text_less_link"),i.slideUp(400,"linear",l)):(t.addClass("tb_text_less_link"),i.slideDown(400,"linear",l))}))})(jQuery,Themify);