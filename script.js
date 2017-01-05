/*
1. Start with the number 42 and set that equal to `majorKey`

2. Create condition logic to check if the `majorKey` is great or equal to 53
2-1. If true, add 42 to `majorKey`
2-2. If false, subtract 13 from `majorKey`

3. Add a the string witha  value of 11 to `majorKey`

4. Create an array, loop through `majorKey` using `charAt`, set array[i] to each value

5. Remove the first and last values from the array

6. Create a new variable. Loop **backwards** through the array and store each value into the new variable, combining each of the values of that array

7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.

******* SWITCH PROGRAMMERS *******

8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`

9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
If neither of these are true, set `majorKey` to 2.

10. Create a while loop that counts down from 10 and increments `majorKey` by 1.

11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
is more than one character in the string. Return `val` and set the `majorKey` to the returned value.

12. Call the function.

13. Console log `majorKey`. Create an index.html file, link in this Javascript file. Load in the browser, check the value.

14. Your answer should be a string value that equals 7. Is that what you got?
*/
// step 1
var majorKey = 42;

// step 2
if (majorKey >= 53) {
    majorKey += 42;
} else {
    majorKey -= 13;
}
//console.log('step 2:'+majorKey);   // 29

// step 3
var strVar = '11';
majorKey += strVar;
//console.log('step 3:'+majorKey);   // '2911'
// step 4
var arrVar = [];
for (var i = 0; i < majorKey.length; i++) {
    arrVar[i] = majorKey.charAt(i);

}
//console.log('step 4: '+arrVar);  // [2,9,1,1]
// step 5
arrVar.pop();
arrVar.shift();
//console.log('step 5: '+arrVar);  // [9,1]
// step 6
var strVar2 = '';
for (var j = arrVar.length; j > 0; j--) {
    strVar2 += arrVar[j - 1];
}
//console.log('step 6: '+strVar2);  // '19'
// step 7
majorKey = parseInt(majorKey);
strVar2 = parseInt(strVar2);

// step 8
majorKey += strVar2;
//console.log('Step 8: ' +majorKey); //291119
// step 9
if (majorKey < 60) {
    majorKey = 14;
} else if (majorKey == 2930) {
    majorKey = 27;
} else {
    majorKey = 2;
}
//console.log('Step 9: ' +majorKey); //2
// step 10
var count = 10;
while (count > 0) {
    majorKey += 1;
    count--;

}
//console.log('Step 10: ' +majorKey); //12
//step 11
function stepEleven(val) {
    val = val.toString();
    if (val.length > 0) {
        val = val.substring(1, val.length);
    }
    return val;
}
// step 12
majorKey = stepEleven(majorKey);
console.log('Step 14: ' + majorKey);
