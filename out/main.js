function f(x) {
    var floor;
    for (var i = 0; i < x; i++) {
        floor = "";
        var kong = x - i - 1;
        for (var j = 0; j < kong; j++) {
            floor += " ";
        }
        var xing = i * 2 + 1;
        for (var k = 0; k < xing; k++) {
            floor += "*";
        }
        console.log(floor);
    }
}
window.onload = function () {
    f(5);
};
//# sourceMappingURL=main.js.map