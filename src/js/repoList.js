/** ściąganie repo z GitHuba */

fetch(
  "https://api.github.com/users/evescolded/repos?sort=created&direction=asc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repoList = document.querySelector(".section__repo--js");

      const myTemplate = 
      `<p class="section__repo-list">
        ${name}
        <a class= "section__repo-links" href="${html_url}" title="Link do repo ${name}">Link do repo</a>
      </p>`;

      repoList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udało się pobrać repo :(");
  });
