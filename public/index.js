$(function(){
    $(".tree-node .node-icon").click(function(e){
        var el = e.target;
        if($(el).hasClass("jian")){
            $(el).removeClass("jian").parents(".tree-node:eq(0)").animate({
                "height" : "25px"
            },100);
        }else{
            $(el).addClass("jian").parents(".tree-node:eq(0)").css({
                "height" : "auto"
            });
        }
    });

    $(".tree-node > ul > li > span").click(function(e){
        var el = e.target;
        if(!$(el).parent("span").hasClass("checked")){
            $(el).parents(".tree-cont").find(" .tree-node > ul > li > span").removeClass("checked");
            $(el).parent("span").addClass("checked");
        }
    });
})