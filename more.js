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
    'I\'m proud of you',
    'Always remember, my heart holds you when my arms cannot.',
    'My heart made its choice, and it chose you',
    'Everything has been better since you',
    'Whenever I talk to you, I\'just happy',
    'Spending time with you is so precious and perfect',
    'You light up my world, my soul, my heart... You\'re my light',
    'You stole my heart, I stole yours... but I know that both of us will keep them safe',
    'Thank you so much for all the moments you\'ve been there for me',
    'I will always be there for you',
    'As soon as I will be able, I will come to visit you',
    'You make my heart so happy',
    'I love you so much',
    'I love you',
    'I love you'
    
]

function newQuote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
button.addEventListener("click", () => {
const offset = button.dataset.carouselButton === "next" ? 1 : -1
const slides = button
.closest("[data-carousel]")
.querySelector("[data-slides]")

const activeSlide = slides.querySelector("[data-active]")
let newIndex = [...slides.children].indexOf(activeSlide) + offset
if (newIndex < 0) newIndex = slides.children.length - 1
if (newIndex >= slides.children.length) newIndex = 0

slides.children[newIndex].dataset.active = true
delete activeSlide.dataset.active
})
})


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const letters = {
    1: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAntonio... my dear Antonio... you came into my life when I least expect it and you turn it around. I still can\'t understand how we get so close in so little time. The thing is, it usually is hard for me to get close to people, because I don\'t really trust others. But with you... something was different. And it scares the shit out of me that I don\'t know what.  Something about you, about your energy just felt... right, even at the beginning. You twisted my mind and now I can\'t stop thinking about you, about our first kiss. That little rushed kiss in the hall of the hotel felt amazing. Again, I can\'t understand how it happened. I usually am a very rational person, I think about every possibility before I do something.  But in that moment... in that moment my thoughts didn\'t matter. I wasn\'t thinking about anything.  I just followed my heart. And it felt so right. And the next ones, the next kisses... to be honest, it all felt like a dream. Like a beautiful dream that I wouldn\'t want to wake up from. And the day I left... it hurt so much. How can someone make you feel so many things in so little time? How can you miss someone so much even if you just meet them? You made me feel so many things im so little time. And I\'m grateful. I\'m grateful that I met you. And I love our little night chats. I love talking to you. Also, the package that you sent me... as I said, I have no words. And not only the package, but the fact that you thought of me... the gesture... I don\'t know if I expressed my feelings well enough, I\'m not very good at expressing my feelings, I\'m still working on that. But I hope I did. Even if there\'s not enough words to express it.I think I\'m starting to fall for you... Jokes on me, I\'ve already fallen. I don\'t know what you did to me boy, but you\'ve win my heart.And it\'s so unfair that we\'re so far away from each other. I don\'t know how this is gonna work. But I want it to work. And I know you want it too. As you said, I\'m not letting you go that easy either:)). Even if it\'s so complicated.",
    2: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nHello there, my sunshine :) \n Today I told you that the person who gave me the painting is special, very special. And you are. I just... I wanted to say more, but I couldn\'t find the words in moment. Sometimes it\'s hard for me to articulate my feelings. That\'s why I chose to write you all of those short "letters". It\'s easier for me to express myself through writing ( ironic, isn\'t it?). \nAnyway \nSo, to get to the point, what I wanted to say is that the person who gave me the painting is very special. He\'s smart, he\'s funny, he\'s kind, he\'s sweet, he has a way with the words ( well, of course, he\'s a poet), he\'s charismatic, he\'s gentle, he\'s adventurous, he\'s inventive, he\'s romantic and he\'s so beautiful, in and out. He\'s beautiful and handsome. And his eyes... I don\'t think he observed that, but his eyes make me feel lost, but in the good way. They make me feel like I could get lost in them, but if this would happen, I wouldn\'t be afraid,  I would feel safe. And his hair... yeah, I love his hair too. Also, he makes me feel so good, so happy.',
    3: 'She looked at him like he was the sun. But she didn\'t squeezed her eyes like you normally do on a summer day. No. For her, the sun has a different meaning. She loves its warmth, its light and it makes her feel  happier, better. And he was like that. Everytime she would talk to him she felt much better.  He could light her mood on a cloudy day.',
    4: 'My dear Antonio, \nI don\'t think you know how happy you make me. You\'re like the first ray of sunshine in a cloudy day. You always light up my mood, sometimes without even knowing it. And I\'m thankful for that. For you. I\'m thankful that I met you. You\'re such a sunny person. I don\'t know how you do that, but never lose that spark. Your energy is so beautiful. You\'re a special person.',
    5: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"I know you"  and "You know me". Two simple, yet very powerful phrases. Such a beautiful feeling, isn\'t it? To know someone. And to know that somebody really knows you. And that somebody knows your heart. It\'s a special thing.  When I met you, I was in a state in which I wasn\'t sure I want to let somebody that close. To let somebody really know me. I have build walls so high that I thought nobody would be able to pass them. But you did. You with that contagious smile of yours that lights my day everytime I see it. You with those random jokes that I love. I was so afraid to let you inside. But I\'m glad I did. And you were so patient. I\'m thankful for this. I know that sometimes I may be difficult and I\'m sorry about this. And I can\'t thank you enough for staying next to me. I hope you will be there for a lot of time. Now back to the phrases from the beginning. I think this was our way to say " i love you" before saying it. You said that you regret not telling me this sooner. But you did, just in a different way. And most importantly, you showed me. You showed me that you love me. You listen to me and had been there for me when I needed. And I can\'t thank you enough for this.',
    6: "\n\n\n\n\n\n\n\n\n\n\n\nWhy do I love you? Hmm, that's  a good question. Let me think. I'm joking. I don't need to think about this, I already know.\nI love you because you're you. \nBecause you are never afraid to show your feelings. \nBecause you're gentle, patient. \nBecause you're funny. I love your jokes.\nBecause I love the way your eyebrow goes up when you're confused. Or the little whole that appears on your cheek when you smile. \nBecause I love the way you talk.\nBecause I love the way you make me feel. Everytime I talk with you I feel so calm and so happy. \nBecause I love how sometimes you look at me when we're watching some series. \nBecause you never force me talk about something and you wait for me. \nBecause you make me happy. \nAnd the list can go on. I love you because you came into my life.",
    7: "My love, \nI will start this letter by saying how proud I am of you and how much I admire everything you do. You're a strong person. I know sometimes it may not feel like this, but trust me. You've been through so much. And you're still standing. If this isn't strength I don't know what it is. \nI don't know what happened that made you feel like this, but I'm here for you. Text me, call me, whatever you want. I will always be. \nEverything will be alright.  I know it. You can get passed everything that comes at you. You can do it. Don't give up.",
    8: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMy dear Antonio,\nI'm so sorry you can't sleep. What happened? Are you playing some game again? You should leave it and go to sleep. Or you're on reels? Or the thing that is keeping you awake is your mind? If that's the case, call me. I don't care if it's the middle of the night. Call me. You are always there for me. I will always be there for you. This is a promise.If you're reading this letter and you're not able to call me, know that I'm sending you the biggest hug. I wish so much I was next to you in this moment.I have an idea. I will tell you a little story. Maybe it will help you fall asleep. \nOnce upon a time, a girl and a boy from different worlds meet because of a school  project and they had no idea what is was to come.  At first they were both very shy. But somehow they started talking. The truth is the girl was very lucky the boy likes to talk a lot and she likes to listen. Unfortunately, after a week, the girl had to return to her world. Both of them were so sad.But when the girl got home, she told her parents that she thinks that she fell in love.And little did they know, they really fell in love. With all the distance between them. It's hard for them, of course, but they don't care. They're happy together. Years and years are about to come and they will still be together. Happily ever after.\nI hope this helped. Good night and see you in my dreams. I love you.",
    9: "My love,\nI know in this moment your heart hurts. And I know you wonder if this is going to work. \nThe truth is we can't know what is going to happen. But I believe that we are the ones who make our future. If we don't give up, than nobody is going to stop us. It will work, I know it will. We have to be patient.  We'll see each other soon, I'm sure of that. I miss you so much. And I can't wait to hug again. I love you so much.",
    10: "My love, \nWhat happened that made you worried about the future? I'm really sorry to hear that, but I understand you. I really do. But I have to tell you something.  More likely to remind you something.  Don't let yourself get lost in what could happen. We spend our time worrying about the future and we forget to enjoy the present. Which in the most important. I'm not saying that the future is not important, but don't forget to enjoy the present.  As a wise character once said \" yesterday is history, tomorrow is a mystery, but today, today is a gift\" ( yes I just quoted master Oogway from Kung Fu Panda) :))). Everything will be alright,  I promise. I love you.",
    11: "My dear Antonio,\n I don't know the reason you're stressed, but everything will be alright. You're a strong person and I know for sure that you will get past everything life throws at you. I know in this moment it may be hard to believe this, but trust me.\nAnd if you need to talk, you already know, call me anytime, no matter the hour.\nI love you",
    12: "My love, \nI miss you as much as you miss me. And it hurts,  I know. But I'm sure we'll see each other soon. I can't wait to hug you again. Or in video call. I can't wait to see your contagious smile again. I told you, you can call me anytime you want. You just have to wait a little bit. It will be worth it. Until that look at our photos that I put in this letter. I made you smile a little bit, didn't I? I promise I will make you smile more. Soon. I love you so much.",
    13: 'My dear Antonio, \nI don\'t have enough words to say how excited I am! I\'ve been waiting for this moment for so much time. And you\'ve been waiting for this moment for as much as me. We\'ve both been waiting for this. I\'m sorry for repeating myself, but just the thought of this makes me very happy.  I can\'t wait. I can\'t wait to jump in your arms when I see you. So get ready:)))\nI can\'t wait to be able to hug you. I can\'t wait to kiss you. You owe me a lot of kisses. I can\'t wait to hold your hand. I can\'t wait to go on a date with you. I just can\'t wait. I love you',
    14: 'My dear Antonio, \nUnfortunately our time together in the same location has come to an end. I\'ll miss you so fucking much. I don\'t even want to think about the moment at the airport. I know for sure I will cry and it will hurt so much. But even if we are not next to each other in real life, we are in our hearts. And we will always be. And who knows, maybe one day we will not have to be apart anymore. I hope.I love you.',
    15: 'My dear Antonio,\n I can\'t believe this day already came... It feels like yesterday you were only telling me about the army test. Time passes fast and there\'s nothing we can do about it.I really hope I\'m there with you. But if I\'m not know that I really tried. And I\'m sorry I couldn\'t come.\nBut even if I\'m not there physically, I\'m with you in your heart. And I must say that I\'m so proud of you. And also so happy for you. I know how much you worked for this. You made your dream come true. One of them. :)Also, tell your mum I can\'t wait to meet her in another occasion. :))) I know she wanted to meet me in this day.\nAnyway, before ending this letter I want to tell you one more time that I\'m very proud of you. I love you so much\n Update: the content in this later does\'t match anymore because I was able to come.',
    16: "My dear Antonio,\nFinally you're leaving your dream. I'm so happy for you. I still remember when you first told me about this. And now you got here. Time passes so fast.  \nI'm so proud of you. I admire your strength, you know? Also your ambition. You worked so hard for getting here. I'm really proud.  I knew you will succeed. I had no doubt.  You deserve it. \nI love you and I'm so proud.",
    17: "Antonio, \nFirst of all, I hope you will not read this letter often.\n So we arrived also to this point. I can't say anymore that is our first argue, because it's not. But what I can say is that I hope it's not bad. If I did something wrong, I'm sorry.  I really am. I didn't want to hurt you.\nIf you did something wrong, give me a little time to calm down. And after that we'll talk. But whatever it was, I already forgive you. I can't stay mad at you.\nI hope we will get over this quickly. I love you so much"
};

const protectedLetters = {
  16: "notyet" // Set a password for letter 16
};

function openLetter(letterNumber) {
  if (protectedLetters[letterNumber]) {
      // Ask for password if the letter is protected
      let enteredPassword = prompt("I knew you will try to open this letter:)). You need the password!");
      if (enteredPassword !== protectedLetters[letterNumber]) {
          alert("Nice try:)))");
          return; // Stop function if the password is incorrect
      }
  }
  
  const letterContent = letters[letterNumber].replace(/\n/g, "<br>"); // Format newlines
  const popupText = document.getElementById("popupText");
  
  popupText.innerHTML = letterContent; // Use innerHTML for formatting
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}