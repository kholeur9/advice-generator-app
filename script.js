const changeQuote = document.querySelector('.click');

function afficheQuote() {
    const iD = document.querySelector('.quote-id');
    const quote = document.querySelector('.quote');

    fetch('https://api.adviceslip.com/advice')
    .then((response) => { 
        return (response.json())
    })
    .then((data) => { 
        console.log(data); 
    
        const idAdvice = data.slip;
        const advice = data.slip;
    
        iD.textContent = `Advice # ${idAdvice.id}`;
        quote.textContent = `" ${advice.advice} "`;
    });
};
afficheQuote();

changeQuote.addEventListener('click', afficheQuote);