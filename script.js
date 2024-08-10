var result = document.getElementById('result');
var box = document.getElementById('box');
// function getDate(d1,d2) {

//     const time = Math.abs(d1-d2);
//     const date =  new Date(time);

//     const year = date.getUTCFullYear() - 1970;
//     const months = date.getUTCMonth();
//     const day = date.getUTCDate() -1;

//     result.innerHTML= "سال: " + year + "ماه: " + months + "روز: " + day
// }


// function calc() {
//     var birth =  document.getElementById('input').value;
//     var date1 = new Date();
//     var date2 = new Date(birth);
//     var result = getDate(date1, date2);
// }


// 

function getDate() {
  var birth = document.getElementById('input').value;
  var d1 = new Date();
  var d2 = new Date(birth);

  const time = Math.abs(d1 - d2);
  const date = new Date(time);

  const year = date.getUTCFullYear() - 1970;
  const months = date.getUTCMonth();
  const day = date.getUTCDate() - 1;

  if (birth) {
    box.style.cssText = "border: 1px solid green;"
    result.style.cssText = "color: green; background-color: rgb(0 0 0 / 35%); padding: 1rem; border: 1px solid green;";

    result.innerHTML = "سال: " + year + "  ماه: " + months + "  روز: " + day;
  } else {
    box.style.cssText = "border: 1px solid #b90606;"
    result.style.cssText = "color: rgb(165 19 19); background-color: rgb(0 0 0 / 35%); padding: 1rem; border: 1px solid #860f0f;";
    result.innerHTML = "لطفا تاریخ تولد خود وارد کنید ";
  }
}


