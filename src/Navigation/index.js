export class Navigation {
  constructor(container) {
    this.container = container;
  }

  render() {
    const navigation = document.createElement("nav");
    const list = document.createElement("ol");
    navigation.append(list);

    fetch("https://api-pokemon-fr.vercel.app/api/v1/gen")
      .then((response) => response.json())
      .then((generations) => {
        generations.forEach(({ generation }) => {
          // créer un élément li autant de fois qu'il y a de générations et et ajouter dans ce li un lien vers la génération
          const listItem = document.createElement("li");
          list.append(listItem);
          const link = document.createElement("a");
          link.href = "#";
          link.textContent = `Générations n°${generation}`;
          listItem.append(link);
        });
      });

    this.container.append(navigation);
  }
}
