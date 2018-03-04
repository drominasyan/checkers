var redCheakers=[];
var blackCheakers=[];
var init = function(){
  console.log("Sssss");
  for(var i = 1; i < 4;++i){
    for (var j = 1; j < 5; ++j) {
        var redCheaker = document.createElement("div");
        redCheaker.setAttribute("class", "red_smile smile");
        var obj={};
        obj.dom=redCheaker;
        obj.pos= {};
        obj.pos.x = i; 
        obj.pos.y = j; 
        redCheakers.push(obj);
        var row_parent = document.getElementsByClassName("row-"+i)[0].children[j-1];
        row_parent.appendChild(redCheaker);

        var blackCheaker = document.createElement("div");
        blackCheaker.setAttribute("class", "black_smile smile");
        var obj_bl={};
        obj_bl.dom=blackCheakers;
        obj_bl.pos= {};
        obj_bl.pos.x = i; 
        obj_bl.pos.y = j; 
        blackCheakers.push(obj_bl);
        var row_parent_bl = document.getElementsByClassName("row-"+(i+5))[0].children[j-1];
        row_parent_bl.appendChild(blackCheaker);
    }
  }
}
init();
console.log(redCheakers);

