const quotes = [
    {
        quote:"The proverbs of Solomon the son of David, king of Israel;",
        author:"Proverbs 1:1",
    },
    {
        quote:"My son, if thou wilt receive my words, and hide my commandments with thee;",
        author:"Proverbs 2:1",
    },
    {
        quote:"My son, forget not my law; but let thine heart keep my commandments:",
        author:"Proverbs 3:1",
    },
    {
        quote:"Hear, ye children, the instruction of a father, and attend to know understanding.",
        author:"Proverbs 4:1",
    },
    {
        quote:"My son, attend unto my wisdom, and bow thine ear to my understanding:",
        author:"Proverbs 5:1",
    },
    {
        quote:"My son, if thou be surety for thy friend, if thou hast stricken thy hand with a stranger,",
        author:"Proverbs 6:1",
    },
    {
        quote:"My son, keep my words, and lay up my commandments with thee.",
        author:"Proverbs 7:1",
    },
    {
        quote:"Doth not wisdom cry? and understanding put forth her voice?",
        author:"Proverbs 8:1",
    },
    {
        quote:"Wisdom hath builded her house, she hath hewn out her seven pillars:",
        author:"Proverbs 9:1",
    },
    {
        quote:"The proverbs of Solomon. A wise son maketh a glad father: but a foolish son is the heaviness of his mother.",
        author:"Proverbs 10:1",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;