let headertabs = document.querySelectorAll("li");
let tabs = document.querySelectorAll(".tab");

headertabs.forEach((li) => {
  li.addEventListener("click", () => {
    let activeHeaderTab = document.querySelector("li.active");
    document.querySelector(".tab.active").classList.remove("active");

    activeHeaderTab.classList.remove("active");
    li.classList.add("active");

    let tabId = li.dataset.target;
    document.querySelector(`.tab.tab-${tabId}`).classList.add("active");
  });
});
