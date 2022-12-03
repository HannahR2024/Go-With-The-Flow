var periodStartDay;
var periodLength;
var menstrual = "These are your Menstration days, do low impact workouts like walking, stretching, and yoga.";
var follicular = "These are your follicular days, do higher impact activities like high intensity interval training (HIIT), running, weight training, and bodyweight workouts. ";
var ovulation = "These are your Ovulation days, do your highest impact activities like high intensity interval training (HIIT), running, weight training, and bodyweight workouts.";
var luteal= "These are your Luteal days, your energy will be low, do low intesity workouts, like walking, yoga, and pilates.";

onEvent("calculate", "click", function( ) {
	console.log("calculate clicked!");
	setScreen("screen2");
	
});
onEvent("calenderCalculate", "click", function( ) {
	console.log("calenderCalculate clicked!");
	setScreen("screen3");
	periodStartDay = getText("lastPeriodDay");
	periodLength = getText("period");
if (periodStartDay=='1' && periodLength == '1 Day') {
  showElement('1');
} else if (periodStartDay== '1' && periodLength == '2 Days'){
  showElement('1');
  showElement('2');  
} else if (periodStartDay == '1' && periodLength == '3 Days'){
  showElement('1');
  showElement('2');
  showElement('3');
  
}else if (periodStartDay == '1' && periodLength == '7 Days'){
  showElement('1');
  showElement('2');
  showElement('3');
  showElement('4');
  showElement('5');
  showElement('6');
  showElement('7');
}

if (periodStartDay=='2' && periodLength == '1 Day') {
  showElement('2');
} else if (periodStartDay== '2' && periodLength == '2 Days'){
  showElement('2');
  showElement('3');  
} else if (periodStartDay == '2' && periodLength == '3 Days'){
  showElement('2');
  showElement('3');
  showElement('4');
  
}else if (periodStartDay == '2' && periodLength == '7 Days'){
  showElement('2');
  showElement('3');
  showElement('4');
  showElement('5');
  showElement('6');
  showElement('7');
  showElement('8');
}

if (periodStartDay=='3' && periodLength == '1 Day') {
  showElement('3');
} else if (periodStartDay== '3' && periodLength == '2 Days'){
  showElement('3');
  showElement('4');  
} else if (periodStartDay == '3' && periodLength == '3 Days'){
  showElement('3');
  showElement('4');
  showElement('5');
  
}else if (periodStartDay == '3' && periodLength == '7 Days'){
  showElement('3');
  showElement('4');
  showElement('5');
  showElement('6');
  showElement('7');
  showElement('8');
  showElement('9');
}
if (periodStartDay=='4' && periodLength == '1 Day') {
  showElement('4');
} else if (periodStartDay== '4' && periodLength == '2 Days'){
  showElement('4');
  showElement('5');  
} else if (periodStartDay == '4' && periodLength == '3 Days'){
  showElement('4');
  showElement('5');
  showElement('6');
  
}else if (periodStartDay == '4' && periodLength == '7 Days'){
  showElement('4');
  showElement('5');
  showElement('6');
  showElement('7');
  showElement('8');
  showElement('9');
  showElement('10');
}
if (periodStartDay=='5' && periodLength == '1 Day') {
  showElement('5');
} else if (periodStartDay== '5' && periodLength == '2 Days'){
  showElement('5');
  showElement('6');  
} else if (periodStartDay == '5' && periodLength == '3 Days'){
  showElement('5');
  showElement('6');
  showElement('7');
  
}else if (periodStartDay == '5' && periodLength == '7 Days'){
  showElement('5');
  showElement('6');
  showElement('7');
  showElement('8');
  showElement('9');
  showElement('10');
  showElement('11');
}
if (periodStartDay=='6' && periodLength == '1 Day') {
  showElement('6');
} else if (periodStartDay== '6' && periodLength == '2 Days'){
  showElement('6');
  showElement('7');  
} else if (periodStartDay == '6' && periodLength == '3 Days'){
  showElement('6');
  showElement('7');
  showElement('8');
  
}else if (periodStartDay == '6' && periodLength == '7 Days'){
  showElement('6');
  showElement('7');
  showElement('8');
  showElement('9');
  showElement('10');
  showElement('11');
  showElement('12');
}
if (periodStartDay=='7' && periodLength == '1 Day') {
  showElement('7');
} else if (periodStartDay== '7' && periodLength == '2 Days'){
  showElement('7');
  showElement('8');  
} else if (periodStartDay == '7' && periodLength == '3 Days'){
  showElement('7');
  showElement('8');
  showElement('9');
  
}else if (periodStartDay == '7' && periodLength == '7 Days'){
  showElement('7');
  showElement('8');
  showElement('9');
  showElement('10');
  showElement('11');
  showElement('12');
  showElement('13');
}
if (periodStartDay=='8' && periodLength == '1 Day') {
  showElement('8');
} else if (periodStartDay== '8' && periodLength == '2 Days'){
  showElement('8');
  showElement('9');  
} else if (periodStartDay == '8' && periodLength == '3 Days'){
  showElement('8');
  showElement('9');
  showElement('10');
  
}else if (periodStartDay == '8' && periodLength == '7 Days'){
  showElement('8');
  showElement('9');
  showElement('10');
  showElement('11');
  showElement('12');
  showElement('13');
  showElement('14');
}
if (periodStartDay=='9' && periodLength == '1 Day') {
  showElement('9');
} else if (periodStartDay== '9' && periodLength == '2 Days'){
  showElement('9');
  showElement('10');  
} else if (periodStartDay == '9' && periodLength == '3 Days'){
  showElement('9');
  showElement('10');
  showElement('11');
  
}else if (periodStartDay == '9' && periodLength == '7 Days'){
  showElement('9');
  showElement('10');
  showElement('11');
  showElement('12');
  showElement('13');
  showElement('14');
  showElement('15');
}
if (periodStartDay=='10' && periodLength == '1 Day') {
  showElement('10');
} else if (periodStartDay== '10' && periodLength == '2 Days'){
  showElement('10');
  showElement('11');  
} else if (periodStartDay == '10' && periodLength == '3 Days'){
  showElement('10');
  showElement('11');
  showElement('12');
  
}else if (periodStartDay == '10' && periodLength == '7 Days'){
  showElement('10');
  showElement('11');
  showElement('12');
  showElement('13');
  showElement('14');
  showElement('15');
  showElement('16');
}
if (periodStartDay=='11' && periodLength == '1 Day') {
  showElement('11');
} else if (periodStartDay== '11' && periodLength == '2 Days'){
  showElement('11');
  showElement('12');  
} else if (periodStartDay == '11' && periodLength == '3 Days'){
  showElement('11');
  showElement('12');
  showElement('13');
  
}else if (periodStartDay == '11' && periodLength == '7 Days'){
  showElement('11');
  showElement('12');
  showElement('13');
  showElement('14');
  showElement('15');
  showElement('16');
  showElement('17');
}
if (periodStartDay=='12' && periodLength == '1 Day') {
  showElement('12');
} else if (periodStartDay== '12' && periodLength == '2 Days'){
  showElement('12');
  showElement('13');  
} else if (periodStartDay == '12' && periodLength == '3 Days'){
  showElement('12');
  showElement('13');
  showElement('14');
  
}else if (periodStartDay == '12' && periodLength == '7 Days'){
  showElement('12');
  showElement('13');
  showElement('14');
  showElement('15');
  showElement('16');
  showElement('17');
  showElement('18');
}
if (periodStartDay=='13' && periodLength == '1 Day') {
  showElement('13');
} else if (periodStartDay== '13' && periodLength == '2 Days'){
  showElement('13');
  showElement('14');  
} else if (periodStartDay == '13' && periodLength == '3 Days'){
  showElement('13');
  showElement('14');
  showElement('15');
  
}else if (periodStartDay == '13' && periodLength == '7 Days'){
  showElement('13');
  showElement('14');
  showElement('15');
  showElement('16');
  showElement('17');
  showElement('18');
  showElement('19');
}
if (periodStartDay=='14' && periodLength == '1 Day') {
  showElement('14');
} else if (periodStartDay== '14' && periodLength == '2 Days'){
  showElement('14');
  showElement('15');  
} else if (periodStartDay == '14' && periodLength == '3 Days'){
  showElement('14');
  showElement('15');
  showElement('16');
  
}else if (periodStartDay == '14' && periodLength == '7 Days'){
  showElement('14');
  showElement('15');
  showElement('16');
  showElement('17');
  showElement('18');
  showElement('19');
  showElement('20');
}
if (periodStartDay=='15' && periodLength == '1 Day') {
  showElement('15');
} else if (periodStartDay== '15' && periodLength == '2 Days'){
  showElement('15');
  showElement('16');  
} else if (periodStartDay == '15' && periodLength == '3 Days'){
  showElement('15');
  showElement('16');
  showElement('17');
  
}else if (periodStartDay == '15' && periodLength == '7 Days'){
  showElement('15');
  showElement('16');
  showElement('17');
  showElement('18');
  showElement('19');
  showElement('20');
  showElement('21');
}
if (periodStartDay=='16' && periodLength == '1 Day') {
  showElement('16');
} else if (periodStartDay== '16' && periodLength == '2 Days'){
  showElement('16');
  showElement('17');  
} else if (periodStartDay == '16' && periodLength == '3 Days'){
  showElement('16');
  showElement('17');
  showElement('18');
  
}else if (periodStartDay == '16' && periodLength == '7 Days'){
  showElement('16');
  showElement('17');
  showElement('18');
  showElement('19');
  showElement('20');
  showElement('21');
  showElement('22');
}
if (periodStartDay=='17' && periodLength == '1 Day') {
  showElement('17');
} else if (periodStartDay== '17' && periodLength == '2 Days'){
  showElement('17');
  showElement('18');  
} else if (periodStartDay == '17' && periodLength == '3 Days'){
  showElement('17');
  showElement('18');
  showElement('19');
  
}else if (periodStartDay == '17' && periodLength == '7 Days'){
  showElement('17');
  showElement('18');
  showElement('19');
  showElement('20');
  showElement('21');
  showElement('22');
  showElement('23');
}
if (periodStartDay=='18' && periodLength == '1 Day') {
  showElement('18');
} else if (periodStartDay== '18' && periodLength == '2 Days'){
  showElement('18');
  showElement('19');  
} else if (periodStartDay == '18' && periodLength == '3 Days'){
  showElement('18');
  showElement('19');
  showElement('20');
  
}else if (periodStartDay == '18' && periodLength == '7 Days'){
  showElement('18');
  showElement('19');
  showElement('20');
  showElement('21');
  showElement('22');
  showElement('23');
  showElement('24');
}
if (periodStartDay=='19' && periodLength == '1 Day') {
  showElement('19');
} else if (periodStartDay== '19' && periodLength == '2 Days'){
  showElement('19');
  showElement('20');  
} else if (periodStartDay == '19' && periodLength == '3 Days'){
  showElement('19');
  showElement('20');
  showElement('21');
  
}else if (periodStartDay == '19' && periodLength == '7 Days'){
  showElement('19');
  showElement('20');
  showElement('21');
  showElement('22');
  showElement('23');
  showElement('24');
  showElement('25');
}
if (periodStartDay=='20' && periodLength == '1 Day') {
  showElement('20');
} else if (periodStartDay== '20' && periodLength == '2 Days'){
  showElement('20');
  showElement('21');  
} else if (periodStartDay == '20' && periodLength == '3 Days'){
  showElement('20');
  showElement('21');
  showElement('22');
  
}else if (periodStartDay == '20' && periodLength == '7 Days'){
  showElement('20');
  showElement('21');
  showElement('22');
  showElement('23');
  showElement('24');
  showElement('25');
  showElement('26');
}
if (periodStartDay=='21' && periodLength == '1 Day') {
  showElement('21');
} else if (periodStartDay== '21' && periodLength == '2 Days'){
  showElement('21');
  showElement('22');  
} else if (periodStartDay == '21' && periodLength == '3 Days'){
  showElement('21');
  showElement('22');
  showElement('23');
  
}else if (periodStartDay == '21' && periodLength == '7 Days'){
  showElement('21');
  showElement('22');
  showElement('23');
  showElement('24');
  showElement('25');
  showElement('26');
  showElement('27');
}
if (periodStartDay=='22' && periodLength == '1 Day') {
  showElement('22');
} else if (periodStartDay== '22' && periodLength == '2 Days'){
  showElement('22');
  showElement('23');  
} else if (periodStartDay == '22' && periodLength == '3 Days'){
  showElement('22');
  showElement('23');
  showElement('24');
  
}else if (periodStartDay == '22' && periodLength == '7 Days'){
  showElement('22');
  showElement('23');
  showElement('24');
  showElement('25');
  showElement('26');
  showElement('27');
  showElement('28');
}
if (periodStartDay=='23' && periodLength == '1 Day') {
  showElement('23');
} else if (periodStartDay== '23' && periodLength == '2 Days'){
  showElement('23');
  showElement('24');  
} else if (periodStartDay == '23' && periodLength == '3 Days'){
  showElement('23');
  showElement('24');
  showElement('25');
  
}else if (periodStartDay == '23' && periodLength == '7 Days'){
  showElement('23');
  showElement('24');
  showElement('25');
  showElement('26');
  showElement('27');
  showElement('28');
  showElement('29');
}
if (periodStartDay=='24' && periodLength == '1 Day') {
  showElement('24');
} else if (periodStartDay== '24' && periodLength == '2 Days'){
  showElement('24');
  showElement('25');  
} else if (periodStartDay == '24' && periodLength == '3 Days'){
  showElement('24');
  showElement('25');
  showElement('26');
  
}else if (periodStartDay == '24' && periodLength == '7 Days'){
  showElement('24');
  showElement('25');
  showElement('26');
  showElement('27');
  showElement('28');
  showElement('29');
  showElement('30');
}
if (periodStartDay=='25' && periodLength == '1 Day') {
  showElement('25');
} else if (periodStartDay== '25' && periodLength == '2 Days'){
  showElement('25');
  showElement('26');  
} else if (periodStartDay == '25' && periodLength == '3 Days'){
  showElement('25');
  showElement('26');
  showElement('27');
  
}else if (periodStartDay == '25' && periodLength == '7 Days'){
  showElement('25');
  showElement('26');
  showElement('27');
  showElement('28');
  showElement('29');
  showElement('30');
  showElement('31');
}
if (periodStartDay=='26' && periodLength == '1 Day') {
  showElement('26');
} else if (periodStartDay== '26' && periodLength == '2 Days'){
  showElement('26');
  showElement('27');  
} else if (periodStartDay == '26' && periodLength == '3 Days'){
  showElement('26');
  showElement('27');
  showElement('28');
  
}else if (periodStartDay == '26' && periodLength == '7 Days'){
  showElement('26');
  showElement('27');
  showElement('28');
  showElement('29');
  showElement('30');
  showElement('31');
}
if (periodStartDay=='27' && periodLength == '1 Day') {
  showElement('27');
} else if (periodStartDay== '27' && periodLength == '2 Days'){
  showElement('27');
  showElement('28');  
} else if (periodStartDay == '27' && periodLength == '3 Days'){
  showElement('27');
  showElement('28');
  showElement('29');
  
}else if (periodStartDay == '27' && periodLength == '7 Days'){
  showElement('27');
  showElement('28');
  showElement('29');
  showElement('30');
  showElement('31');
 
}
if (periodStartDay=='28' && periodLength == '1 Day') {
  showElement('28');
} else if (periodStartDay== '28' && periodLength == '2 Days'){
  showElement('28');
  showElement('29');  
} else if (periodStartDay == '28' && periodLength == '3 Days'){
  showElement('28');
  showElement('29');
  showElement('30');
  
}else if (periodStartDay == '28' && periodLength == '7 Days'){
  showElement('28');
  showElement('29');
  showElement('30');
  showElement('31');

}
if (periodStartDay=='29' && periodLength == '1 Day') {
  showElement('29');
} else if (periodStartDay== '29' && periodLength == '2 Days'){
  showElement('29');
  showElement('30');  
} else if (periodStartDay == '29' && periodLength == '3 Days'){
  showElement('29');
  showElement('30');
  showElement('31');
  
}else if (periodStartDay == '29' && periodLength == '7 Days'){
  showElement('29');
  showElement('30');
  showElement('31');
  
}
if (periodStartDay=='30' && periodLength == '1 Day') {
  showElement('30');
} else if (periodStartDay== '30' && periodLength == '2 Days'){
  showElement('30');
  showElement('31');  
} else if (periodStartDay == '30' && periodLength == '3 Days'){
  showElement('30');
  showElement('31');

}else if (periodStartDay == '30' && periodLength == '7 Days'){
  showElement('30');
  showElement('31');
}
if (periodStartDay=='31' && periodLength == '1 Day') {
  showElement('31');
} else if (periodStartDay== '31' && periodLength == '2 Days'){
  showElement('31');
   
} else if (periodStartDay == '31' && periodLength == '3 Days'){
  showElement('31');

}else if (periodStartDay == '31' && periodLength == '7 Days'){
  showElement('31');
}

if (periodStartDay =='1' || periodStartDay =='2' ||periodStartDay =='3' || periodStartDay =='3' ||periodStartDay =='4' ||periodStartDay =='5' ||periodStartDay =='6' ||periodStartDay =='7' ||periodStartDay =='8' ||periodStartDay =='9' ||periodStartDay =='10'){
setProperty("week1text", "text", menstrual);
setProperty('week2text', "text", follicular);
setProperty('week3text',"text", ovulation );
setProperty('week4text',"text", luteal);

}
if(periodStartDay == '11'||periodStartDay == '12'||periodStartDay == '13'||periodStartDay == '14'||periodStartDay == '15'||periodStartDay == '16'||periodStartDay == '17'){
setProperty("week1text", "text", luteal);
setProperty('week2text', "text", menstrual);
setProperty('week3text',"text", follicular );
setProperty('week4text',"text", ovulation);

}
if(periodStartDay =='18' ||periodStartDay =='19' ||periodStartDay =='20' ||periodStartDay =='21' ||periodStartDay =='22' ||periodStartDay =='23' ||periodStartDay =='24' ){
setProperty("week1text", "text", ovulation);
setProperty('week2text', "text", luteal);
setProperty('week3text',"text", menstrual );
setProperty('week4text',"text", follicular);

}
if(periodStartDay =='25' ||periodStartDay =='26' ||periodStartDay =='27' ||periodStartDay =='28' ||periodStartDay =='29' ||periodStartDay =='30' ||periodStartDay =='31' ){
setProperty("week1text", "text", follicular);
setProperty('week2text', "text", ovulation);
setProperty('week3text',"text", luteal);
setProperty('week4text',"text", menstrual);

}
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen('homePage');
});