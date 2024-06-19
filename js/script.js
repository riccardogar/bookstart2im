import axios from "axios";
import _ from "lodash";

const formDom = document.querySelector(".form");
const inputDOM = document.getElementById("testo");

formDom.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = inputDOM.value.trim();

  if (value) {
    const url = `https://openlibrary.org/subjects/${value}.json`;
    try {
      const response = await axios.get(url);
      const data = response.data;

      if (_.get(data, "works.length", 0) > 0) {
        const booksContainer = document.getElementById("books-container");
        booksContainer.innerHTML = ""; // Clear previous results

        data.works.forEach((work) => {
          const title = work.title;
          const authors = _.get(work, "authors", [])
            .map((author) => author.name)
            .join(", ");
          const bookDiv = document.createElement("div");
          bookDiv.classList.add("book");

          const coverEditionKey = work.cover_edition_key;
          const coverEditionUrl = coverEditionKey
            ? `https://covers.openlibrary.org/b/olid/${coverEditionKey}-M.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover";

          const coverImage = document.createElement("img");
          coverImage.src = coverEditionUrl;
          coverImage.alt = `${title} book cover`;
          coverImage.classList.add("book-cover");

          const bookInfo = document.createElement("div");
          bookInfo.classList.add("book-info");
          bookInfo.innerHTML = `<strong>Title:</strong> ${title}<br><strong>Authors:</strong> ${authors}`;

          const descriptionButton = document.createElement("button");
          descriptionButton.textContent = "Description";
          descriptionButton.addEventListener("click", async () => {
            const bookKey = work.key;
            const bookDescriptionUrl = `https://openlibrary.org${bookKey}.json`;

            try {
              const descriptionResponse = await axios.get(bookDescriptionUrl);
              const bookData = descriptionResponse.data;
              const description = _.get(
                bookData,
                "description.value",
                _.get(bookData, "description", "No description available")
              );
              alert(description);
            } catch (error) {
              console.error("Error retrieving description", error);
              alert(
                "An error occurred while retrieving the description. Please try again later"
              );
            }
          });

          bookDiv.appendChild(coverImage);
          bookDiv.appendChild(bookInfo);
          bookDiv.appendChild(descriptionButton);
          booksContainer.appendChild(bookDiv);
        });
      } else {
        alert("Nessun libro trovato per questa categoria.");
      }
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
      alert(
        "Si è verificato un errore durante la richiesta. Riprova più tardi."
      );
    }
  } else {
    alert("Inserisci una categoria valida.");
  }
});
