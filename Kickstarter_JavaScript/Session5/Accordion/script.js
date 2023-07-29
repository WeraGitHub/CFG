const accordionItems = document.getElementsByClassName("accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  // As we loop through every element with the accordion-item class, we get the accordion-header element within the current accordion-item
  const accordionHeader = accordionItems[i].getElementsByClassName(
    "accordion-header"
  )[0];
  // Get the accordion-content element within the current accordion-item
  const accordionContent = accordionItems[i].getElementsByClassName(
    "accordion-content"
  )[0];

  // Add a click event listener to the accordion-header elements
  accordionHeader.addEventListener("click", function () {
    // For when OPENING an accordion-item: if the accordion-content element is currently hidden i.e the accordion-item is closed then we click it
    if (accordionContent.style.display === "none") {
      // If it's hidden, show the accordion-content element
      accordionContent.style.display = "block";
      // Add the 'open' class to the accordion item to change the + to a -
      accordionItems[i].classList.add("open");
    } else {
      //  For when CLOSING an accordion-item: If visible, hide the content element
      // If it's visible, hide the accordion-content element
      accordionContent.style.display = "none";
      // Remove the 'open' class from the accordion item to change the - back to a +
      accordionItems[i].classList.remove("open");
    }
  });
}
