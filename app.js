const qst = document.querySelectorAll(".question");

qst.forEach((itemz) => {
  itemz.addEventListener("click", () => {
    if (itemz.parentNode.classList.contains("active")) {
      itemz.parentElement.classList.toggle("active");
    } else {
      qst.forEach((dele) => {
        dele.parentNode.classList.remove("active");
      });
      itemz.parentElement.classList.add("active");
    }
  });
});
