function createTodo(todoName) {
    // Créer le container de la todo
    const todoContainer = document.createElement("li");
  
    // Le paragraphe pour le titre de la todo
    const para = document.createElement("p");
    // MEttre l'entrée dans le pragraphe
    para.textContent = todoName;
  
    // Créer la date d'auhourd'hui
    const date = new Date();
    const paraDate = document.createElement("p");
    paraDate.textContent = date.toLocaleString();
  
    //Créer le bouton supprime
    const deletButton = document.createElement("button");
    deletButton.textContent = "Supprimer";
  
    //Créer le bouton valider
    const validateButton = document.createElement("button");
    validateButton.textContent = "Valider";
  
    // Mettre les donnée de la tache dans le container
    todoContainer.append(para, paraDate, deletButton, validateButton);
  
    return todoContainer;
  }
  
  document
    .querySelector("#todo-button")
    .addEventListener("click", (event) => {
      //
      event.preventDefault();
      // Selectionner le champ
      const todoInput = document.querySelector("#todo-input");
      const todoValue = todoInput.value;
  
      const error = document.querySelector("#todo-error");
      if (todoValue === "") {
        error.textContent = "Le champ est obligatoire";
      } else {
        // Vider le message d'erreur
        error.textContent = "";
  
        const todo = createTodo(todoValue);
        // Mettre la tache dans le HTML
        document.querySelector("#todos").append(todo);
      }
    });



    document
  .querySelector("#todo-button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    // Selectionner le champ
    const todoInput = document.querySelector("#todo-input");
    const todoValue = todoInput.value;

    const error = document.querySelector("#todo-error");
    if (todoValue === "") {
      error.textContent = "Le champ est obligatoire";
    } else {
      // Vider le message d'erreur
      error.textContent = "";

      // Créer le container de la todo
      const todoContainer = document.createElement("li");

      // Le paragraphe pour le titre de la todo
      const para = document.createElement("p");
      // MEttre l'entrée dans le pragraphe
      para.textContent = todoValue;

      // Créer la date d'auhourd'hui
      const date = new Date();
      const paraDate = document.createElement("p");
      paraDate.textContent = date.toLocaleString();

      //Créer le bouton supprime
      const deletButton = document.createElement("button");
      deletButton.textContent = "Supprimer";

      //Créer le bouton valider
      const validateButton = document.createElement("button");
      validateButton.textContent = "Valider";

      // Mettre les donnée de la tache dans le container
      todoContainer.append(
        para,
        paraDate,
        deletButton,
        validateButton
      );

      // Mettre la tache dans le HTML
      document.querySelector("#todos").append(todoContainer);
    }
  });