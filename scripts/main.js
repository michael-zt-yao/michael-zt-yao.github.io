const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/mount_vic.jpg") {
        myImage.setAttribute("src", "images/old_pic.jpg");
    } else {
        myImage.setAttribute("src", "images/mount_vic.jpg");
    }
});

let mybutton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

mybutton.addEventListener("click", () => {
    setUserName();
});