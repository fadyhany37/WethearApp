let input=document.querySelector(".input input");
let img1=document.querySelector(".img1");
let day1=document.querySelector(".day1");
let date1=document.querySelector(".date1");
let city=document.querySelector(".city");
let temp1=document.querySelector(".temp1");
let condition1=document.querySelector(".condition1");
let day2=document.querySelector(".day2");
let temp2=document.querySelector(".temp2");
let mintemp2=document.querySelector(".mintemp2");
let img2=document.querySelector(".img2");
let condition2=document.querySelector(".condition2");
let day3=document.querySelector(".day3");
let temp3=document.querySelector(".temp3");
let mintemp3=document.querySelector(".mintemp3");
let img3=document.querySelector(".img3");
let condition3=document.querySelector(".condition3");


let loc="cairo";
let finalResult;

const d = new Date();
let today=d.getDay();
let dayNum = d.getDate();

function dayName(day) {
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     if(day>6)
     {
        day=0;
     }
     return weekday[day];

}




const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m = new Date();
let mon=m.getMonth();
let month_name = month[mon];

(()=>{

     getApi(loc);
  })();


 input.addEventListener("keyup", ()=>{
    getInput();
    getApi(loc);
})
  
 function getInput() {
    loc=input.value;
    
      
  }
  async function getApi( location) {
      var apiRespone= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cb8a1549291941ef984142650221901&q=${location}&days=3`);
       finalResult =await apiRespone.json();
      
       day1.innerHTML=dayName(today);
       date1.innerHTML=`${dayNum} ${month_name}`;
       city.innerHTML=finalResult.location.name;
       temp1.innerHTML=`${finalResult.forecast.forecastday[0].day.maxtemp_c} &#8451;`;
       img1.setAttribute("src",finalResult.forecast.forecastday[0].day.condition.icon);
       condition1.innerHTML=finalResult.forecast.forecastday[0].day.condition.text;

       day2.innerHTML=dayName(today+1);
       temp2.innerHTML=`${finalResult.forecast.forecastday[1].day.maxtemp_c} &#8451;`;
       mintemp2.innerHTML=`${finalResult.forecast.forecastday[1].day.mintemp_c} &#8451;`;
       img2.setAttribute("src",finalResult.forecast.forecastday[1].day.condition.icon);
       condition1.innerHTML=finalResult.forecast.forecastday[1].day.condition.text;

       day3.innerHTML=dayName(today+2);
       temp3.innerHTML=`${finalResult.forecast.forecastday[2].day.maxtemp_c} &#8451;`;
       mintemp3.innerHTML=`${finalResult.forecast.forecastday[2].day.mintemp_c} &#8451;`;
       img3.setAttribute("src",finalResult.forecast.forecastday[2].day.condition.icon);
       condition3.innerHTML=finalResult.forecast.forecastday[2].day.condition.text;
       
       
}

  

