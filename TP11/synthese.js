function isLeap(year){
    return (((year%100 != 0) && (year%4 == 0)) ||(year%400 == 0) );
}

function getNbDays(year, month) {
    if(month%2 != 0 && month!=2){
        return 31;
    }else{
        if(month%2 == 0 && month!=2){
            return 30
        }else{
            if(month == 2 && isLeap(year)==true){
                return 29;
            }else{
                return 28;
            }
        }
    }
}

function getDayInWeek(year, month, day){
    let DateDay = new Date(`${month}, ${day}, ${year}`);
    if (DateDay.getDay() ==0 ){
        return 7
    }else{
        return DateDay.getDay()
    }
}

function buildCalendar(element, year, month){
    let weekday = [Lundi,Mardi,Mercedi,Jeudi,Vendredi];
    let monthyear = [Janvier,Fevrier,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre];
    let headerHTML = `<div id='header' class='header'> ${monthyear[month-1]}</div>`;
    element.insertAdjacentHTML("afterbegin",headerHTML);
}

export {isLeap,getNbDays,getDayInWeek,buildCalendar}