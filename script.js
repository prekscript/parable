document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {
        revealElements.forEach((el) => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    const wordContainer = document.querySelector("#wordContainer");
    const wordInput = document.querySelector("#wordInput");
    const wordPopup = document.querySelector("#wordPopup");
    const wordMeaning = document.querySelector("#wordMeaning");

    function createFloatingWord(text) {
        const word = document.createElement("span");
        word.classList.add("animated-word");
        word.textContent = text;

        word.addEventListener("click", () => showWordPopup(text));
        wordContainer.appendChild(word);
    }

    function showWordPopup(word) {
        wordMeaning.textContent = `Meaning of "${word}" goes here...`;
        wordPopup.classList.add("active");
    }

    wordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const newWord = wordInput.value.trim();
            if (newWord !== "") {
                createFloatingWord(newWord);
                wordInput.value = "";
            }
        }
    });
});
