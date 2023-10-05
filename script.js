const container = document.getElementById('Doggo-container')



document.getElementById('btn').addEventListener('click', () => {
    const promise = fetch('https://dog.ceo/api/breeds/image/random');
    
    promise.then(res => {
        const process = res.json();

        return process;
    }).then(process => {
        const img = document.createElement('img')
        img.src = process.message;
        img.alt = "Cute Doggo";

        container.appendChild(img);
    })

    // Hello
})