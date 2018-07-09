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
    //console.log('Хер вам');
}
else {
    //console.log(j);
}

//console.log(max);

var names = ['Ilya', 'Egor', 'Sonya', 'Adruha', 'Alina', 'Mike', 'Jeremy'];

for(var i = 0; i < names.length; i++){
    var amount = names[i].length;
    //console.log("hello, " + names[i] + "y tebya " + amount + " bykvy"); 
}

var word1 = 'qakfoisolfspouiughw2';
var word2 = 'qtkfosohlfspouiughw2';

var t = 0;
for(var i = 0; i < word1.length; i++)
{

    if(word1[i] != word2[i]) t++;
    
}
//console.log(t);

var per = 12;
var ans = 1;

var fuct = 3;
for(var i = fuct; i > 0; i--)
{
    ans *= i;
}

function FindFuct(number) {
    if(number == 1)
        return 1;
    else
        return number * FindFuct(number-1);
}

ans = FindFuct(12);

console.log(ans);