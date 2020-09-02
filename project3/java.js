const quotebtn = document.querySelector("#quoteButton");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");


var quoteArr = [
    {
        name: 'J.D. Salinger, The Catcher in the Rye',
        quote: 'What really knocks me out is a book that, when you"re all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn"t happen much, though.'
    },
    {
        name: '― Thomas Mann, Essays of Three Decades',
        quote: 'A writer is someone for whom writing is more difficult than it is for other people.'
        

    },
    {
        name: 'Ernest Hemingway',
        quote: 'All good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.'

    },
    {
        name: 'G.K. Chesterton, Heretics',
        quote: 'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.'

    },
    {
        name: 'Vasudev Rana',
        quote: 'If you workhard you will get what you achieve'

    },
    {
        name: 'Louisa May Alcott, Little Women',
        quote: "I've got the key to my castle in the air, but whether I can unlock the door remains to be seen."

    }
]
quotebtn.addEventListener('click', geneQoutes);

function geneQoutes () {



    let number = Math.floor(Math.random() * quoteArr.length);
    quoteAuthor.innerHTML = quoteArr[number].name;
    quote.innerHTML = quoteArr[number].quote;
}