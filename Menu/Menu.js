/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

function makeMenuItem (str) {
  const item = document.createElement('li');
  item.textContent = str;
  item.addEventListener('mouseenter',()=>gsap.to(item, {duration: 1, scale: 1.5, ease:'bounce'}));
  item.addEventListener('mouseleave',()=>gsap.to(item, {duration: 0.5, scale: 1, ease:'bounce'}));
  return item;
}

function makeMenu (arr) {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const ul = document.createElement('ul');
  menu.appendChild(ul);
  arr.forEach((i) => ul.appendChild(makeMenuItem(i)));
  return menu;
}

function menuToggle (menu) {
  //This was how I was getting the menu to appear:
  //menu.classList.toggle('menu--open')
  //To do the stretch, it's always open, but moves
  //on or off depending on what's needed.
  menu.classList.toggle('menu--open')
  if (menu.classList.contains('menu--open')) {
    gsap.to(menu, {duration: 1, x: 0});
  } else {
    //this line keeps the menu visible
    menu.style.display = 'block';
    gsap.to(menu, {duration: 1, x: -500});

  }
}

function onLoad (menu) {
  gsap.to(menu, {duration: 0, x: -500});
}

const menu = makeMenu(menuItems);
const menuButton = document.querySelector('.menu-button');
//menuButton.addEventListener('click', () => menu.classList.toggle('menu--open'));
menuButton.addEventListener('click',()=> menuToggle(menu));
window.addEventListener('load',()=>onLoad(menu));
const header = document.querySelector('.header');
header.appendChild(menu);
