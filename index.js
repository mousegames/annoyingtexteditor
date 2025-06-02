alert("Boo, did i scare you?");

let box = document.getElementById("box");
let file = document.getElementById("file");
let save = document.getElementById("save");
let game = document.getElementById("game");

let friendName = (Math.random()) * 10;

// move box
document.addEventListener("mousemove", function (event) {
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
});

// save file
file.addEventListener("click", function (event) {
    let fileContent = file.value;
    let fileName = `yourBestFriend_${friendName}_WantsYouToOpenThis.txt`;
    let txt = new Blob([fileContent], {type: "text"})

    let link = document.createElement("a");
    link.href = URL.createObjectURL(txt);
    link.download = fileName;

    link.click();
});

// fake save file
save.addEventListener("click", function (event) {
    alert("Saved");
});

// game
game.addEventListener("click", function (event) {
    let num = 16;
    for (let i = 1; i < num; i++) {
        alert(`You have ${num - i} more click/s until the game is over`);
    }
});