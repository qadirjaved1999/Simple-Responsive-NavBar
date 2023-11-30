const myFunction = () => {
  let menuBar = document.getElementById("myTopNav");
  console.log(menuBar);
  if (menuBar.className === "menu") {
    menuBar.className += " responsive";
  } else {
    menuBar.className = "menu";
  }
};
