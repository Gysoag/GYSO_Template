/*  
** Javascript
** Author: Jeffrey Widmer
** Company: GYSO AG
** Date: 01.12.2021
** ||@  = Überschriften
** ||   = Erklärung
*/


/* ||@ Accordion Funktion ————————————————————————————————————————————————————————————————————————————————— */
/* || START ——————————————————————————————————————————————————————————————————————————————————————————————— */


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    //items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }

  // Mehrere Tabs öffnen
  if (itemToggle == 'true') {
    this.setAttribute('aria-expanded', 'false');
  }

}

items.forEach(item => item.addEventListener('click', toggleAccordion));

/* || ENDE ———————————————————————————————————————————————————————————————————————————————————————————————— */