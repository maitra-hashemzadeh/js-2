//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const characterImages = {
  "Harry Potter": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
  "Hermione Granger": "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
  "Ron Weasley": "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
  "Albus Dumbledore": "https://upload.wikimedia.org/wikipedia/en/4/4f/Dumbledore_and_Elder_Wand.JPG",
  "Severus Snape": "https://upload.wikimedia.org/wikipedia/en/b/b9/Severus_Snape_poster.jpg",
  "Lord Voldemort": "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg"
};

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const characterName = card.querySelector("h3").textContent.trim();

  if (characterImages[characterName]) {
    const img = card.querySelector("img");
    img.src = characterImages[characterName];
    img.alt = characterName;
  } else {
    console.warn("No image found for:", characterName);
  }
});

  