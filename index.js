let nav = `<nav id="mynav">

        <a href="index.html" class="navlink active ">About me</a>
        <a href="form.html" class="navlink">Form</a>

      </nav>`;
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("beforebegin", htmlString);

insertAfter(document.getElementById("container"), nav);

//add class active
const currentLocation = location.href;
const menuItem = document.querySelectorAll("#mynav a");
console.log(menuItem);

for (i = 0; i < menuItem.length; i++) {
  if (
    currentLocation ===
    "file:///Users/user/Documents/alt-sch-project/assignment3/form.html"
  ) {
    document.getElementById("mynav").style.width = "50%";
  } 
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
    // console.log(menuItem[i].href, "menu item");
  }
}
