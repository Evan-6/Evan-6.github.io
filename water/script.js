function getInfo(a){
  var max2=[18642,149];
  var value1=[0,0];
  var value2=[0,0];
  var value3=[0,0];
  value1[0]=3.00;
  value2[0]=18231.85;
  value3[0]=0;
  value1[1]=0.00;
  value2[1]=32.51;
  value3[1]=0;
  
  document.getElementById("rain1").value=value1[a];
  document.getElementById("rain1").max=10;
  document.getElementById("water1").value=value2[a];
  document.getElementById("water1").max=max2[a];
  document.getElementById("waterchange1").value=value3[a];
  document.getElementById("waterchange1").max=10;
}
window.onload=getInfo(0);

