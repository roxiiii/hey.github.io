var quotes = [
    'I miss you',
    'You\'re beautiful' ,
    'You\'re handsome', 
    'You\'re funny. I love your jokes',
    'You\'re like a ray of sunshine', 
    'Your smile is so beautiful ',
    ' You make me feel so good',
    'You light up my mood everytime we talk',
    'I\'m glad we met',
    'You\'re special',
    'Thank you for coming into my life',
    'Your voice is my favourite sound',
    'You\'re always on my mind',
    'You stole my heart ',
    'I smile just thinking about you ',
    'One smile can\'t change the world, but yours change mine',
    'Meeting you was one of the best things that happened to me this year',
    'Your energy is so beautiful', 
    'M-am atașat de tine',
    'I can\'t wait to see you again',
    'I\'m lucky I met you',
    'You\'re my favourite notification',
    'I\'m proud of you'
]

function newQuote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


