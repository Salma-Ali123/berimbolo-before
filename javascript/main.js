document.addEventListener('DOMContentLoaded' , 
    function(){
        var visitorsNumber= document.getElementById('visitorsNumber')
        let countVisit = localStorage.getItem('pageViews')
        if(countVisit){
            countVisit = Number(countVisit) + 1
        }
        else{
            countVisit = 1
        }
        localStorage.setItem('pageViews' , countVisit)
        visitorsNumber.innerHTML = countVisit
    }
)