const quotes = [
    {
        quote:"그래도 해야지 어떡해",
        author:"좌우명",
    },
    {
        quote:"그냥해",
        author:"좌우명",
    },
    {
        quote:"대충살려고, 열심히 살고 있어요",
        author:"좌우명",
    },
    {
        quote:"눕는게 제일 좋아~ 침구들 모여라~",
        author:"좌우명",
    },
    {
        quote:"난 지금까지의 나랑은 다르다.",
        author:"좌우명",
    },
    {
        quote:"지금보다 잘하면 내가 신이지 사람이겠어요?",
        author:"좌우명",
    },
    {
        quote:"이게 꿈이 아니라면 그냥 기절시켜 주세요.",
        author:"좌우명",
    },
    {
        quote:"견뎌",
        author:"좌우명",
    },
    {
        quote:"까짓거 뭐가 어렵겠어요?",
        author:"좌우명",
    },
    {
        quote:"직장에 있을땐 하고싶은게 참 많다.",
        author:"공감",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;