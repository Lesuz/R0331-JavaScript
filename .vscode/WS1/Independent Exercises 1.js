// Independent Exercises 1
// 1 Dogs age

function AgeAsDog(age){
    return age*7;
}
var x = AgeAsDog(15);
document.write(x);

//2 Debugging given code
// Original code in comments if it is wrong

var i = 5; var j = 10 ;
// var k = 25; var l = Joe; - Added quatation marks 
var k = 25; var l = "Joe";

if (i < j) { 
    console.log("i");
// else if (j > k) console.log("k"); -- Added wave brackets
}else if (j > k) {
    console.log("k");
// else console.log("j); - Else needs wave brackets when running multiple lines of code, be sure to end a string at some point - Added " after j
//	  var arr = [3, 5, 7];
//    for (var i = 0; i <=3; ++i){
//    console.log(arr[i]);
//    }
}else {
    console.log("j");
	var arr = [3, 5, 7];
    for (var i = 0; i <=3; ++i){
        console.log(arr[i]);
    }
}

