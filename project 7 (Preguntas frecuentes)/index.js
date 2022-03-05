const btn = document.querySelectorAll(".question-btn");

btn.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
      
    var text = e.currentTarget.parentElement.parentElement;
    // if (text.classList.contains("show-text")) {
    //   text.classList.remove("show-text");
    // } else {
    //   text.classList.add("show-text");
    // }
    text.classList.toggle("show-text");
  });
});
