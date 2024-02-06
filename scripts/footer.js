// Add footer. Used for all pages.

// Email
small1 = document.createElement("small");
link1 = document.createElement("a");
link1.setAttribute("href", "mailto:isaac.j.woodard@gmail.com")
link1.textContent = "isaac.j.woodard@gmail.com";
small1.appendChild(link1);
small1.appendChild(document.createElement("br"));

// LinkedIn
small2 = document.createElement("small");
link2 = document.createElement("a");
link2.setAttribute("href", "https://www.linkedin.com/in/isaacjwoodard")
link2.textContent = "LinkedIn";
small2.appendChild(link2);

// Target and Container
const footer = document.getElementById("footer");
address = document.createElement("address");
address.setAttribute("class", "center")
footer.appendChild(address);
address.appendChild(small1);
address.appendChild(small2);