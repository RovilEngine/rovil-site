for (let elem of document.querySelectorAll("button")) {
  let target = elem.value;
  let inline = elem.attributes.inline;
  elem.onclick = (e) => {
    e.preventDefault();
    if (inline) { window.location = target }
    else { window.open(target); };
  }
}