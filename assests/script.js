let education = [
    {
        id:1,
        year:2019,
        desc: "Matriculated",
        place: "Claremont High",
    },
    {
        id:2,
        year:2014,
        desc: "Completion of primary school",
        place: "Newfield's primary",
    },
];

let experience = [
    {
        id: 1,
        year:2022,
        desc: "Cash Processor",
        place:"SBV",
    },
    {
        id: 2,
        year:2022,
        desc: "Child-care",
        place:"In-house",
    },
    {
        id: 3,
        year:2017,
        desc: "Tutor",
        place:"Voice of the voiceless",
    },
];

let eduShow = document.querySelector(".education");
education.forEach((data)=>{
    eduShow.innerHTML += `
    <div class= "card mx-30%">
    <h4 class="display-4">${data.year}</h4>
    <div class= "card-body">
    <p class="text-black">${data.desc} AT <span>${data.place}</span></p>
        </div></div>`
});
let expShow = document.querySelector(".experience");
experience.forEach((data)=>{
    expShow.innerHTML += `
    <div class="card">
    <h4 class= "display-4">${data.year}</h4>
    <div class="card-body">
    <p class="text-black">${data.desc} At <span>${data.place}</span></p>
    </div></div>`
})
