function enterDate(){

  var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    document.getElementById("datainput").style.display="none";
    document.getElementById("showDate").style.display="block";
    var x = document.getElementById("date1").value;
    var d = (new Date(x)).getDate();
    var m = (new Date(x)).getMonth();
    var n = month[m];
    var y = (new Date(x)).getFullYear();
    document.getElementById("enteredDate").innerHTML= "["+ d+"/"+n+"/"+y+"]";
}

var num1 = 0;
function change1(parameter){
  if(parameter === 1){
    num1 += 1;}
  if(parameter === 0){
    if(num1>0){
    num1 -= 1;}
  }
  document.getElementById("getter1").innerHTML = num1;
}

var num2 = 0;
function change2(parameter){
  if(parameter === 1){
    num2 += 1;}
  if(parameter === 0){
    if(num2>0){
    num2 -= 1;}
  }
  document.getElementById("getter2").innerHTML = num2;
}

var num3 = 0;
function change3(parameter){
  if(parameter === 1){
    num3 += 1;}
  if(parameter === 0){
    if(num3>0){
    num3 -= 1;}
  }
  document.getElementById("getter3").innerHTML = num3;
}

var num4 = 0;
function change4(parameter){
  if(parameter === 1){
    num4 += 1;}
  if(parameter === 0){
    if(num4>0){
    num4 -= 1;}
  }
  document.getElementById("getter4").innerHTML = num4;
}

var num5 = 0;
function change5(parameter){
  if(parameter === 1){
    num5 += 1;}
  if(parameter === 0){
    if(num5>0){
    num5 -= 1;}
  }
  document.getElementById("getter5").innerHTML = num5;
}

var num6 = 0;
function change6(parameter){
  if(parameter === 1){
    num6 += 1;}
  if(parameter === 0){
    if(num6>0){
      num6 -= 1;}
  }
  document.getElementById("getter6").innerHTML = num6;
}
