function loadContact() {
  //remove old content div
  let old = document.querySelector('#content');
  old.parentNode.removeChild(old);
  
  //creates new content div
  let content = document.createElement('div');
  content.id = 'content';

  let address = document.createElement('h1');
  address.textContent = 'Address';

  let address1 = document.createElement('h2');
  address1.textContent = '42 Hole Avenue, California, United States'

  let email = document.createElement('h1');
  email.textContent = 'E-mail';

  let email1 = document.createElement('h2');
  email1.textContent = 'MrColesHoles@gmail.com';

  let phone = document.createElement('h1');
  phone.textContent = 'Phone';

  let phone1 = document.createElement('h2');
  phone1.textContent = '(707) 342 - 6926';

  //create page content
  let title = document.createElement('h1');
  title.textContent = 'Contact Us!';

  //append page content to content div
  content.append(title, address, address1, email, email1, phone, phone1);

  //appends new content div after nav div
  let nav = document.querySelector('#nav');
  nav.parentNode.insertBefore(content, nav.nextSibling);
}
  
export { loadContact }