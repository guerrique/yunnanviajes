const toggleImageInfos = () => {
  console.log('Hello from toggle_truc');
}

  function showParagraph(e) {

    // location = e.currentTarget.dataset.location
    // targetElement = document.querySelector(`.cardtext[data-location='${location}']`);

    console.log(e.currentTarget);
    console.log(e.currentTarget.id);
    // displays description text of card clicked

    console.log(`${e.currentTarget.id}_description`);

    const description = document.getElementById(`${e.currentTarget.id}_description`);
    if(description.style.display === "none") {
      // hides the description of the card previously shown
      const descOther = document.querySelectorAll(".description");
      // console.log(descOther);
      descOther.forEach(d => d.style.display = "none");
      description.style.display = "block";
      description.scrollIntoView();
    } else {
      description.style.display = "none";
    }
  }

  const card = document.querySelectorAll('.card');
  card.forEach(c => c.addEventListener('click', event => showParagraph(event)));

export { toggleImageInfos };
