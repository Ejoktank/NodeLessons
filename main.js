var a = 15;
var b = true;
var c = "dsgsdgsdg";
var d = '3';

if(true) {
    //
}
else {
    //
}

var rt = [10,20,340,605,402,20];

var max = rt[0];
for(var i = 1; i < rt.length; i++)
{
    if(rt[i] > max) max = rt[i];
}

var word = "gdfgdfpgfdgdpfg";

var j = 0;
while(word[j] != 'p' && j <word.length)
{
    j++;
}

if(j == word.length) {
    console.log('Хер вам');
}
else {
    console.log(j);
}

console.log(max);


