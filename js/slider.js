/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var timeOut;
var pause=5000;

var ta= window.setInterval(function(){
    window.clearInterval(ta);
    init();
},4000);



function init(){
    
    var initialHeight=$('#pop-title').height();
    var fontSize=$('#pop-title').css('font-size');
    var lessFont=(parseInt(fontSize)-10).toString()+'px';
    var initialHeightString = initialHeight.toString();
    var lessHeight = initialHeight-20;
    var lessHeightString = lessHeight.toString();
    var titleParentHeight=$('#titleParent').outerHeight(true);
    
    $('#relative-bot').css({
        'top':titleParentHeight
    });
    
    $('#pop-title').attr({
        'data-0':"font-size:"+fontSize+"; top:0px;",
        'data-20':"font-size:"+lessFont+"; top:0px;"
    });
    
    $('#relative-bot').attr({
        'data-0':"top:"+titleParentHeight+"px;",
        'data-20':"top:"+lessHeightString+"px;"
    });
    
    $('#header-region .columnizer-col1 .populr-image-slider').attr({
        'data-20':"opacity:1",
        'data-700':"opacity:0"
    });
    
    $('.goUp').attr({
        'data-300':"bottom:-50px;",
        'data-400':"bottom:50px;"
    });
    
    var s = skrollr.init();
    
    $('.goUp').click(function(){
        
        
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
        
        
    });
}
