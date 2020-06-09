!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){let e=document.querySelector("#content");e.parentNode.removeChild(e);const t=document.createElement("div");t.id="content";const n=document.createElement("h2");n.textContent="Hello, I am Alex Cole. Buy my hole!";const o=document.createElement("img");o.src="./images/holes.png",o.id="logo";const l=document.createElement("h1");l.textContent="Alex Cole's Donut Holes";const i=document.createElement("p");i.textContent="Welcome to my donut shop. We sell the greatest quality donut holes in all of the United States. Our mission is to provide you with the fluffiest, glaziest, most scrumptious holes you have ever laid your tongue upon.";const a=document.createElement("p");a.textContent="We source our flour from the great plains of the sky, ensuring our holes are the fluffiest. We gather our yeast from... other holes, ensuring it is natural and GMO free. We use glaze with shine that rivals that of a mirror. Lastly, our sugar. We use the finest grain, pixie dust-esque, almost inhalable sugar to commit to the promise of being the most scrumptious hole ever to have the pleasure of being inside you.",t.appendChild(l),t.appendChild(o),t.appendChild(n),t.appendChild(i),t.appendChild(a);let c=document.querySelector("#nav");c.parentNode.insertBefore(t,c.nextSibling)}function l(e){document.getElementById(e).style.visibility="visible"}function i(e){document.getElementById(e).style.visibility="hidden"}function a(){let e=document.querySelector("#content");e.parentNode.removeChild(e);let t=document.createElement("div");t.id="content";let n=document.createElement("h1");n.textContent="Menu";let o=document.createElement("h2");o.textContent="All items are sold by the dozen!";let a=document.createElement("div");a.id="grid";let c=document.createElement("div");c.className="item",c.id="classic";let d=document.createElement("div");d.id="m1",d.className="menuText",d.style.visibility="hidden";let m=document.createElement("h1");m.textContent="Classic";let r=document.createElement("h2");r.textContent="$6";let u=document.createElement("p");u.textContent="Our classic, fluffy, SCRUMPTIOUS holes that you love! The best hole to ever touch your tongue!",d.append(m,r,u),c.appendChild(d),c.onmouseover=function(){l("m1")},c.onmouseleave=function(){i("m1")};let s=document.createElement("img");s.src="./images/classic.jpg",c.appendChild(s),a.appendChild(c);let p=document.createElement("div");p.className="item",p.id="cakepop";let h=document.createElement("div");h.id="m2",h.className="menuText",h.style.visibility="hidden";let C=document.createElement("h1");C.textContent="Cake Pop";let f=document.createElement("h2");f.textContent="$8";let v=document.createElement("p");v.textContent="A spin on our classic holes, coated with frosting and dipped in sprinkles topped with a stick for easy eating!",h.append(C,f,v),p.appendChild(h),p.onmouseover=function(){l("m2")},p.onmouseleave=function(){i("m2")};let E=document.createElement("img");E.src="./images/cakepop.jpg",p.appendChild(E),a.appendChild(p);let y=document.createElement("div");y.className="item",y.id="cookie";let g=document.createElement("div");g.id="m3",g.className="menuText",g.style.visibility="hidden";let x=document.createElement("h1");x.textContent="Cookie Dough";let b=document.createElement("h2");b.textContent="$8";let N=document.createElement("p");N.textContent="Our classic batter recipe filled with a rich, creamy, chocolate chip cookie dough inside!",g.append(x,b,N),y.appendChild(g),y.onmouseover=function(){l("m3")},y.onmouseleave=function(){i("m3")};let S=document.createElement("img");S.src="./images/cookie.jpeg",y.appendChild(S),a.appendChild(y);let j=document.createElement("div");j.className="item",j.id="jelly";let k=document.createElement("div");k.id="m4",k.className="menuText",k.style.visibility="hidden";let w=document.createElement("h1");w.textContent="Jelly Filled";let A=document.createElement("h2");A.textContent="$8";let O=document.createElement("p");O.textContent="Using our classic Cloud batter, we bake then fill these holes with the finest local raspberry, grape, and apricot jellies!",k.append(w,A,O),j.appendChild(k),j.onmouseover=function(){l("m4")},j.onmouseleave=function(){i("m4")};let T=document.createElement("img");T.src="./images/jelly.jpg",j.appendChild(T),a.appendChild(j);let M=document.createElement("div");M.className="item",M.id="mummy";let q=document.createElement("div");q.id="m5",q.className="menuText",q.style.visibility="hidden";let P=document.createElement("h1");P.textContent="Mummy";let B=document.createElement("h2");B.textContent="$10";let U=document.createElement("p");U.textContent="The signature hole you love artistically coated with buttermilk frosting and fondant eyeballs!",q.append(P,B,U),M.appendChild(q),M.onmouseover=function(){l("m5")},M.onmouseleave=function(){i("m5")};let W=document.createElement("img");W.src="./images/mummy.jpg",M.appendChild(W),a.appendChild(M);let $=document.createElement("div");$.className="item",$.id="vegan";let _=document.createElement("div");_.id="m6",_.className="menuText",_.style.visibility="hidden";let H=document.createElement("h1");H.textContent="Vegan Chocolate & Pistachio";let I=document.createElement("h2");I.textContent="$12";let L=document.createElement("p");L.textContent="A vegan version of our Cloud batter topped with a rich chocolate sauce and crushed pistachios!",_.append(H,I,L),$.appendChild(_),$.onmouseover=function(){l("m6")},$.onmouseleave=function(){i("m6")};let R=document.createElement("img");R.src="./images/vegan.jpg",$.appendChild(R),a.appendChild($),t.appendChild(n),t.appendChild(o),t.appendChild(a);let z=document.querySelector("#nav");z.parentNode.insertBefore(t,z.nextSibling)}function c(){let e=document.querySelector("#content");e.parentNode.removeChild(e);let t=document.createElement("div");t.id="content";let n=document.createElement("h1");n.textContent="Address";let o=document.createElement("h2");o.textContent="42 Hole Avenue, California, United States";let l=document.createElement("h1");l.textContent="E-mail";let i=document.createElement("h2");i.textContent="MrColesHoles@gmail.com";let a=document.createElement("h1");a.textContent="Phone";let c=document.createElement("h2");c.textContent="(707) 342 - 6926";let d=document.createElement("h1");d.textContent="Contact Us!",t.append(d,n,o,l,i,a,c);let m=document.querySelector("#nav");m.parentNode.insertBefore(t,m.nextSibling)}n.r(t),o(),function(){const e=document.querySelector("#nav"),t=document.createElement("label"),n=document.createElement("span");n.textContent="Home";const l=document.createElement("input");l.setAttribute("type","radio"),l.setAttribute("name","tab-control"),l.checked=!0,t.className="newRadio",t.addEventListener("click",o),t.append(l),t.append(n);const i=document.createElement("label"),d=document.createElement("span");d.textContent="Menu";const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","tab-control"),i.className="newRadio",i.addEventListener("click",a),i.append(m),i.append(d);const r=document.createElement("label"),u=document.createElement("span");u.textContent="Contact";const s=document.createElement("input");s.setAttribute("type","radio"),s.setAttribute("name","tab-control"),r.className="newRadio",r.addEventListener("click",c),r.append(s),r.append(u),e.appendChild(t),e.appendChild(i),e.appendChild(r)}()}]);