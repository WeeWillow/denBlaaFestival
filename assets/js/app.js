function changeTab(tabIndex) {
  
    let tabs = document.getElementsByClassName("tab");
    for (let tab of tabs) {
      tab.classList.remove("active");
    }
    let tabButtons = document.getElementsByClassName("tabButton");
    for (let button of tabButtons) {
      button.classList.remove("active");
    }

    tabs[tabIndex - 1].classList.add("active");
    tabButtons[tabIndex - 1].classList.add("active");
  }