const Hw = require('./hw.json') ;
function toppingType (){
    //console.log("all topping types ID :");
    for(let i=0;i<Hw.length;i++){
        for(let j =0 ; Hw[i].topping.length;j++){
            console.log("the id of topping " + Hw[i].topping[j].type + "is :"+ Hw[i].topping[j].id);
        }}} 
function BatterType (){
            //console.log("all topping types ID :");
    for(let i=0;i<Hw.length;i++){
        for(let j =0 ; Hw[i].batters.batter.length;j++){
             console.log("the id of topping " + Hw[i].batters.batter[j].type + "is :"+ Hw[i].batters.batter[j].id);
                }}}
var sum = 0;
function PpuAverage(){
    for(let i=0;i<Hw.ppu;i++){
        sum = sum + Hw[i].ppu ;}
    var average = sum/(Hw.length);
    return average ;}
function PpuSum(){
    for(let i=0;i<Hw.ppu;i++){
        var sum = sum + Hw[i].ppu ;
        return sum ; }
    }

  

