(function tp1() {
window.onload = function init() {
    var pageModules;

    function getPageModules() {

        return [
            document.getElementById("main_header"),
            document.getElementById("main_section_1"),
            document.getElementById("main_section_2"),
            document.getElementById("main_nav_1"),
            document.getElementById("main_nav_2"),
            document.getElementById("main_aside_1"),
            document.getElementById("main_aside_2"),
            document.getElementById("main_article"),
            document.getElementById("main_footer"),
            document.getElementById("recherche")
        ] 
    }
    
    pageModules = getPageModules();
    console.log(pageModules);
    
    function styliserModule(num, color, bg) {
        
        pageModules[num].style.color = color;
        pageModules[num].style.backgroundColor = bg;
        
    }
    
    function getModuleInfos(num) {
        var dimension = pageModules[num].getBoundingClientRect()
        var gmi = {
            id: pageModules[num].id,
            tag: pageModules[num].tagName,
            class: pageModules[num].className,
            a: dimension.top,
            b: dimension.bottom,
            c: dimension.left,
            d: dimension.right,
        }
        return gmi
        
    }
    console.log(getModuleInfos(0));
    
    
    
    
        styliserModule(0, "aqua", "gray");
        styliserModule(1, "green", "pink");
        styliserModule(2, "yellow", "purple");
        
    
        
        
    }
    


})();
