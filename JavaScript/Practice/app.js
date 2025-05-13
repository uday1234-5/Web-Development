var a = 10;
function fun() {
    console.log(a);
    var a = 20
    function foo() {
        var a = 20;
        console.log(a);
        var a = 30;

    }
}