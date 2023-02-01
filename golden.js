

















let mon=[
       'january',
       'february',
       'march',
       'april',
       'may',
       'june',
       'july',
       'august',
       'october',
       'november',
       'december' 
]
let weekDays=[
       'monday',
       'tuesday',
       'wednesday',
       'thursday',
       'friday',
       'saturday',
       'sunday'
]

let deadline=document.querySelector('.deadline');

let tday=new Date();

let getYear=tday.getFullYear();
let getMonth=tday.getMonth();
let getDay=tday.getDay();
let getDate=tday.getDate();

let futureDate= new Date(getYear,getMonth,getDate + 10,10,20);


let getfYear=futureDate.getFullYear();
let getfMonth=futureDate.getMonth();
let getfDay=futureDate.getDay();
let getfDate=futureDate.getDate();



let dispYear=getfYear;
let dispMonth=mon[getfMonth];
let dispDay=weekDays[getDay];
let dispDate=getfDate;



deadline.innerHTML=`The offer Ends on ${dispDate}th,${dispMonth},${dispYear}  17.30pm`;


let futureTime=futureDate.getTime();

let timer=setInterval(remainingTime,1000);
remainingTime()

function remainingTime(){
       let currentTime= new Date().getTime();

       let t= futureTime-currentTime;

       let oneDay= 24 * 60 * 60 * 1000;
       let oneHour= 60 * 60 * 1000;
       let oneMinute=60 * 1000;

         let days=Math.floor((t / oneDay));
         let hours=Math.floor((t % oneDay ) / oneHour);
         let minutes=Math.floor((t % oneHour) / oneMinute);
         let seconds= Math.floor((t % oneMinute) / 1000);


         let values=[days,hours,minutes,seconds];

         let items=document.querySelectorAll('.time');


         function zeroAdder(items){
              if(items < 10){
                     return `0${items}`
              }
              return items
         }

         items.forEach((item,value)=>{
              item.innerHTML=zeroAdder(values[value])
         })
}




