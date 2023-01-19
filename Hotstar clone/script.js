console.log("Javascript loads fine!!!");

const sliderImageContainer = document.querySelector('.img-slider-right img');
const sliderContainer = document.querySelector('.image-slider-container');
const sliderImageTitle = document.querySelector('.img-title');
const sliderImageShortDesc = document.querySelector('.lang-desc');
const sliderImageLongDesc = document.querySelector('.img-desc');
const previewButton = document.querySelectorAll('.preview');
const sliderImages = ['slider 1.PNG','slider 2.PNG','slider 3.PNG','slider 4.PNG','slider 5.PNG'];
const sliderImageContent = [ 
    {
        title: 'Loki',
        shortDesc: '1 Season . 6 Episodes . Superhero . U/A 13+ . Marvel',
        longDesc: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame"'
    },
    {
        title: 'The Falcon And The Winter Soldier',
        shortDesc: '1 Season . 10 Episodes . Superhero . U/A 13+ . Marvel',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in libero blandit, congue est id, interdum neque. Maecenas massa orci, mollis id ullamcorper eget, ultrices eu eros. Sed at mollis justo. Nullam condimentum fringilla urna eu pretium. Donec eu fringilla metus. Suspendisse aliquet ipsum tristique, feugiat risus at, luctus enim.' 
    },
    {
        title: 'Wanda Vision',
        shortDesc: '1 Season . 6 Episodes . Superhero . U/A 13+ . Marvel',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in libero blandit, congue est id, interdum neque. Maecenas massa orci, mollis id ullamcorper eget, ultrices eu eros. Sed at mollis justo. Nullam condimentum fringilla urna eu pretium. Donec eu fringilla metus. Suspendisse aliquet ipsum tristique, feugiat risus at, luctus enim.'
    },
    {
        title: 'Raya-The Last Dragon',
        shortDesc: '1 Season . 6 Episodes . Superhero . U/A 13+ . Marvel',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in libero blandit, congue est id, interdum neque. Maecenas massa orci, mollis id ullamcorper eget, ultrices eu eros. Sed at mollis justo. Nullam condimentum fringilla urna eu pretium. Donec eu fringilla metus. Suspendisse aliquet ipsum tristique, feugiat risus at, luctus enim.'
    },
    {
        title: 'Luca',
        shortDesc: '1 Season . 6 Episodes . Superhero . U/A 13+ . Marvel',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in libero blandit, congue est id, interdum neque. Maecenas massa orci, mollis id ullamcorper eget, ultrices eu eros. Sed at mollis justo. Nullam condimentum fringilla urna eu pretium. Donec eu fringilla metus. Suspendisse aliquet ipsum tristique, feugiat risus at, luctus enim.'
    }
];

sliderImageContainer.src = `./assets/images/${sliderImages[0]}`
sliderImageTitle.innerText = sliderImageContent[0].title;
sliderImageShortDesc.innerText = sliderImageContent[0].shortDesc;
sliderImageLongDesc.innerText = sliderImageContent[0].longDesc;

const slideImages = (data,idx)=>{
    setTimeout(()=>{
        sliderImageContainer.src = `./assets/images/${data}`
    },idx*5000);
}
const slideImageContent = (data,idx)=>{
    setTimeout(()=>{
        sliderImageTitle.innerText = data.title;
        sliderImageShortDesc.innerText = data.shortDesc;
        sliderImageLongDesc.innerText = data.longDesc;
    },idx*5000);
}
sliderImages.forEach((data,idx)=>{
    slideImages(data,idx);
});

sliderImageContent.forEach((data,idx)=>{
    slideImageContent(data,idx);
});

setInterval(()=>{
    sliderImages.forEach((data,idx)=>{
        slideImages(data,idx);
    });
},25000);

setInterval(()=>{
    sliderImageContent.forEach((data,idx)=>{
        slideImageContent(data,idx);
    });
},25000);

const previewNodeToHTML = Array.from(previewButton);
const hidePreviewButtons = ()=>{
    previewNodeToHTML.forEach(data=>{
        data.style.display='none'
    });
}
const showPreviewButtons = ()=>{
    previewNodeToHTML.forEach(data=>{
        data.style.display='block';
    });
}
sliderContainer.addEventListener('mouseover',e=>{
    showPreviewButtons();
});

sliderContainer.addEventListener('mouseout',e=>{
    hidePreviewButtons();
});




