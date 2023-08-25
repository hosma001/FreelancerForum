const container = document.querySelector('.container');

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];

const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  function randomFreelancers(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const priceIdx = Math.floor(Math.random()*freelancers.length);
    const info = {
        name: names[nameIdx],
        occupation: occupations[occupationIdx],
        price: freelancers[priceIdx]     
    };
    return info;   
}

const information = [
    randomFreelancers(),
    randomFreelancers()
];
  
  function render (){
    const titleHeadings = `<h1 class = "title Heading">Freelancer Forum</h1>`;
    
    const priceHeadings = `<h2 class = "price Heading">The average starting price is [placeholder].</h2>`;
    
    const middleHeadings = `<h2 class = "middle Heading">Available Freelancers</h2>`;

    const bottomHeadings = `<h3 class = "bottom Heading">Name Occupation Starting Price</h3>`;  
    
    const freelancerInfo = information.map(function(info){
        return `<div class = "${info.name} ${info.occupation} ${info.price}">${info.name} ${info.occupation} $${info.price}</div>`;
    });
    container.innerHTML = titleHeadings + priceHeadings + middleHeadings + bottomHeadings + freelancerInfo.join('');   
}

render();

const interval = setInterval(function(){
    const newInfo = randomFreelancers();
    information.push(newInfo);
    render();
    if(information.length === 20){
        clearInterval(interval);
    }
}, 1000);