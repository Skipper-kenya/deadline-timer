






let month=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "september",
    "November",
    "December",
];

let days=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


let today_date=new Date();

let t_year=today_date.getFullYear();
let t_month=today_date.getMonth();
let t_day=today_date.getDate();

let future_date=new Date(t_year,t_month,t_day +30,00,00);


let f_year=future_date.getFullYear();
let f_month=future_date.getMonth();
let f_date=future_date.getDate();
let f_day=future_date.getDay();

let dispYear=f_year;
let dispMonth=month[f_month];
let dispDate=days[f_date];


let deadline=document.querySelector('.deadline');
deadline.innerHTML=`Deadline for unit registration is ${f_day}th,${dispMonth} ${dispYear}.`


setInterval(timer,1000)
let f_time=future_date.getTime();

function timer(){
    
    let Curr_time=new Date().getTime();

    let t=f_time-Curr_time;


    let oneday=24 * 60 * 60 * 1000;
    let onehours=60 * 60 * 1000;
    let oneminutes=60 * 1000;
    

    let day=Math.floor((t/oneday));
    let hours=Math.floor((t % oneday) / onehours);
    let minutes=Math.floor((t % onehours) / oneminutes);
    let seconds=Math.floor((t % oneminutes) / 1000);

    let time_setter=document.querySelectorAll('.tim');

    let values=[day,hours,minutes,seconds];

  
    function zeroAdder(item){
        if(item < 10){
            return `0${item}`;
        }
        return item;
    }
    
    time_setter.forEach((timee,value)=>{
              timee.innerHTML=zeroAdder(values[value])
    })
}