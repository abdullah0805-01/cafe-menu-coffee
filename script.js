/* Name: Muhammad Abdullah | Roll Number: 26i-3034 | Section: Section A */

function orderNow(itemName) {
  if (itemName) {
    window.alert("Thank you! Your order for " + itemName + " has been received.");
  } else {
    window.alert("Thank you! Your quick order request has been received. Visit us at FAST-NUCES Islamabad Student Center!");
  }
  console.log("Order submitted for: " + (itemName || "General Order"));
}

function handleFormSubmit(event) {
  event.preventDefault();
  window.alert("Thank you for your feedback/message! Our team at FAST Café will contact you shortly.");
  console.log("Contact form submitted.");
  return false;
}

function showImageDetails(title, price) {
  window.alert("Featured Special: " + title + "\nPrice: " + price + " PKR\nAvailable daily at FAST Student Center!");
}

console.log("FAST Café Website scripts loaded successfully.");
