var button = document.getElementById('slide');
button.onclick = function () {
    var row1 = document.getElementById('row1');
    sideScroll(row1,'right',25,500,30);
    
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var row1 = document.getElementById('row1');
    sideScroll(row1,'left',25,500,30);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
