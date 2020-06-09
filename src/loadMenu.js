import { show, hide } from './visibility.js'

function loadMenu() {
  //remove old content div
  let old = document.querySelector('#content');
  old.parentNode.removeChild(old);

  //create new content div
  let content = document.createElement('div');
  content.id = 'content';

  //create page contents
  let title = document.createElement('h1');
  title.textContent = 'Menu';

  let dozen = document.createElement('h2');
  dozen.textContent = 'All items are sold by the dozen!'

  let grid = document.createElement('div');
  grid.id = 'grid';

  let item1 = document.createElement('div');
  item1.className = 'item';
  item1.id = 'classic';
  //Create hidden div for mouseover
  let menuText1 = document.createElement('div');
  menuText1.id = 'm1';
  menuText1.className = 'menuText';
  menuText1.style.visibility = 'hidden';
  //Name, price, description
  let t1 = document.createElement('h1');
  t1.textContent = 'Classic';
  let p1 = document.createElement('h2')
  p1.textContent = '$6'
  let d1 = document.createElement('p')
  d1.textContent = 'Our classic, fluffy, SCRUMPTIOUS holes that you love! The best hole to ever touch your tongue!'
  
  //appends new elements to item div
  menuText1.append(t1, p1, d1);
  item1.appendChild(menuText1);
  //show item info on mouseover
  item1.onmouseover = function(){
      show('m1');
  };
  item1.onmouseleave = function(){
      hide('m1');
  };
  //adds image
  let classic = document.createElement('img');
  classic.src = '/dist/images/classic.jpg';
  item1.appendChild(classic);
  //append to grid
  grid.appendChild(item1);

  let item2 = document.createElement('div');
  item2.className = 'item';
  item2.id = 'cakepop';
  let menuText2 = document.createElement('div');
  menuText2.id = 'm2';
  menuText2.className = 'menuText';
  menuText2.style.visibility = 'hidden';
  let t2 = document.createElement('h1');
  t2.textContent = 'Cake Pop';
  let p2 = document.createElement('h2')
  p2.textContent = '$8'
  let d2 = document.createElement('p')
  d2.textContent = 'A spin on our classic holes, coated with frosting and dipped in sprinkles topped with a stick for easy eating!'
  menuText2.append(t2, p2, d2);
  item2.appendChild(menuText2);
  item2.onmouseover = function(){
      show('m2');
  };
  item2.onmouseleave = function(){
      hide('m2');
  };
  let cakepop = document.createElement('img');
  cakepop.src = '/dist/images/cakepop.jpg';
  item2.appendChild(cakepop);
  grid.appendChild(item2);

  let item3 = document.createElement('div');
  item3.className = 'item';
  item3.id = 'cookie';
  let menuText3 = document.createElement('div');
  menuText3.id = 'm3';
  menuText3.className = 'menuText';
  menuText3.style.visibility = 'hidden';
  let t3 = document.createElement('h1');
  t3.textContent = 'Cookie Dough';
  let p3 = document.createElement('h2')
  p3.textContent = '$8'
  let d3 = document.createElement('p')
  d3.textContent = 'Our classic batter recipe filled with a rich, creamy, chocolate chip cookie dough inside!'
  menuText3.append(t3, p3, d3);
  item3.appendChild(menuText3);
  item3.onmouseover = function(){
      show('m3');
  };
  item3.onmouseleave = function(){
      hide('m3');
  };
  let cookie = document.createElement('img');
  cookie.src = '/dist/images/cookie.jpeg';
  item3.appendChild(cookie);
  grid.appendChild(item3);

  let item4 = document.createElement('div');
  item4.className = 'item';
  item4.id = 'jelly';
  let menuText4 = document.createElement('div');
  menuText4.id = 'm4';
  menuText4.className = 'menuText';
  menuText4.style.visibility = 'hidden';
  let t4 = document.createElement('h1');
  t4.textContent = 'Jelly Filled';
  let p4 = document.createElement('h2')
  p4.textContent = '$8'
  let d4 = document.createElement('p')
  d4.textContent = 'Using our classic Cloud batter, we bake then fill these holes with the finest local raspberry, grape, and apricot jellies!'
  menuText4.append(t4, p4, d4);
  item4.appendChild(menuText4);
  item4.onmouseover = function(){
      show('m4');
  };
  item4.onmouseleave = function(){
      hide('m4');
  };
  let jelly = document.createElement('img');
  jelly.src = '/dist/images/jelly.jpg';
  item4.appendChild(jelly);
  grid.appendChild(item4);

  let item5 = document.createElement('div');
  item5.className = 'item';
  item5.id = 'mummy';
  let menuText5 = document.createElement('div');
  menuText5.id = 'm5';
  menuText5.className = 'menuText';
  menuText5.style.visibility = 'hidden';
  let t5 = document.createElement('h1');
  t5.textContent = 'Mummy';
  let p5 = document.createElement('h2')
  p5.textContent = '$10'
  let d5 = document.createElement('p')
  d5.textContent = 'The signature hole you love artistically coated with buttermilk frosting and fondant eyeballs!'
  menuText5.append(t5, p5, d5);
  item5.appendChild(menuText5);
  item5.onmouseover = function(){
      show('m5');
  };
  item5.onmouseleave = function(){
      hide('m5');
  };
  let mummy = document.createElement('img');
  mummy.src = '/dist/images/mummy.jpg';
  item5.appendChild(mummy);
  grid.appendChild(item5);

  let item6 = document.createElement('div');
  item6.className = 'item';
  item6.id = 'vegan';
  let menuText6 = document.createElement('div');
  menuText6.id = 'm6';
  menuText6.className = 'menuText';
  menuText6.style.visibility = 'hidden';
  let t6 = document.createElement('h1');
  t6.textContent = 'Vegan Chocolate & Pistachio';
  let p6 = document.createElement('h2')
  p6.textContent = '$12'
  let d6 = document.createElement('p')
  d6.textContent = 'A vegan version of our Cloud batter topped with a rich chocolate sauce and crushed pistachios!'
  menuText6.append(t6, p6, d6);
  item6.appendChild(menuText6);
  item6.onmouseover = function(){
      show('m6');
  };
  item6.onmouseleave = function(){
      hide('m6');
  };
  let vegan = document.createElement('img');
  vegan.src = '/dist/images/vegan.jpg';
  item6.appendChild(vegan);
  grid.appendChild(item6);

  //appendChild page contents to content div
  content.appendChild(title);
  content.appendChild(dozen);
  content.appendChild(grid);

  //appendChild new, filled content div after nav div
  let nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}

export { loadMenu }