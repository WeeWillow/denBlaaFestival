const burgerIcon = document.getElementById('burgerIcon');
const mobileNav = document.getElementById('mobileNav');

//tilføjer en eventlistner til burgermenu ikonet så der vil ske en funktion når der trykkes på det
burgerIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('show'); //Når der trykkes på ikonet får mobileNav classen show og bliver ved hjælp af css nu vist
  burgerIcon.classList.toggle('active'); //Burger menuikonet for også en class som sørger for at ikonet skifter farve fra blå til hvid og man stadig kan se det når menuen er framme
});