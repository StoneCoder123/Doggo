const container = document.getElementById('Doggo-container')



document.getElementById('btn').addEventListener('click', () => {
    const promise = fetch('https://dog.ceo/api/breeds/image/random');
    alert("Fetching...");
    promise.then(res => {
        const process = res.json();
        alert("Processing...");
        return process;
    }).then(process => {
        const img = document.createElement('img')
        img.src = process.message;
        img.alt = "Cute Doggo";
        alert("Happy Dogging!")
        container.appendChild(img);
    })

    // Hello
})