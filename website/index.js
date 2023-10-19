const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://lgojrc4ot3kzmrpff6an6gcmee0bplik.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = " Views: " + data;
}

updateCounter();