const ApiCaller =() => {
    jokeElement.innerHTML = "Loading...";
    fetch("https://icanhazdadjoke.com/slack")
    .then( data => data.json())
    .then(jokeData => {
            const joke = jokeData.attachments[0].text;

            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = joke;
    })
} 
ApiCaller();
document.getElementById('jokeButton').addEventListener('click', ApiCaller);