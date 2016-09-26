function f(x:number):void {
    var floor:string;
    for(var i:number =0;i<x;i++){
    floor = "";
    var kong = x-i-1;
    for(var j:number = 0;j<kong;j++){
            floor += " ";
        }
    var xing = i*2+1;
    for(var k:number =0;k<xing;k++){
           floor += "*";
    }
     console.log(floor);
     }

}


window.onload = () => {
    f(5);
};