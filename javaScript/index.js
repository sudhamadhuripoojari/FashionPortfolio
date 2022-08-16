//Shop Button function
function shopFunction(){
    alert("Covid-19 Announcement!! We would like to thanks all our patrons and hope for their well-being. We regret to inform you that there could be a possibility of shipment delay due to the current scenario. We urge you to remain in touch with us");
}

//Gallery-filter
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }
        this.classList.add('current');
        let targetData = this.getAttribute('data-target');
        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');
            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}










