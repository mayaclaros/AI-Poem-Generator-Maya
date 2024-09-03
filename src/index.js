function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "You may write me down in history With your bitter, twisted lies, You may trod me in the very dirt But still, like dust, I'll rise",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
