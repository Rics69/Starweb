//black and white image
const projectItemsImg = document.querySelectorAll('.project__content-item img');

projectItemsImg.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        item.style.filter = "none";
    });
});

projectItemsImg.forEach(item=>{
    item.addEventListener('mouseout', ()=>{
        item.style.filter = "grayscale(100%)";
    });
});
