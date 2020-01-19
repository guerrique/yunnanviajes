const toggleImageInfos = () => {
  console.log('Hello from toggle_truc');
}

  // function showParagraph(e) {

  //   // location = e.currentTarget.dataset.location
  //   // targetElement = document.querySelector(`.cardtext[data-location='${location}']`);

  //   console.log(e.currentTarget);
  //   console.log(e.currentTarget.id);
  //   // displays description text of card clicked

  //   console.log(`${e.currentTarget.id}_description`);

  //   const description = document.getElementById(`${e.currentTarget.id}_description`);
  //   if(description.style.display === "none") {
  //     // hides the description of the card previously shown
  //     const descOther = document.querySelectorAll(".description");
  //     // console.log(descOther);
  //     descOther.forEach(d => d.style.display = "none");
  //     description.style.display = "block";
  //     description.scrollIntoView();
  //   } else {
  //     description.style.display = "none";
  //   }
  // }

  // const card = document.querySelectorAll('.card');
  // card.forEach(c => c.addEventListener('click', event => showParagraph(event)));

    function showParagraph(e) {

    // location = e.currentTarget.dataset.location
    // targetElement = document.querySelector(`.cardtext[data-location='${location}']`);

    // console.log(e.currentTarget);
    // console.log(e.currentTarget.id);
    // console.log(`${e.currentTarget.id}_description`);

    // displays description text of card clicked


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

    function hideParagraph(e) {
      // hides the card description displayed
      e.currentTarget.style.display = "none";
      // scroll screen to card that led to that description
      const changeId = document.getElementById(`${e.currentTarget.id}`.replace('_description',''));
      changeId.scrollIntoView();
    }

  const card = document.querySelectorAll('.card');
  card.forEach(c => c.addEventListener('click', event => showParagraph(event)));

  const cardText = document.querySelectorAll('.cardtext');
  cardText.forEach(c => c.addEventListener('click', event => hideParagraph(event)));

export { toggleImageInfos };
