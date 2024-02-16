<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porfolio Améliore</title>
    <link rel="stylesheet" href="styles/style.css" type="text/css">
    <link rel="stylesheet" href="styles/contacts.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

</head>
<body>
    <!--fond de page-->

   <section class="container">
    <div class="box">

         <!---home-->
    <nav class="acceuil_introduction">

      <a href="#" class="logo"> 
        <img src="images/logo.png" alt="" width="45%">
    </a>

        <ul class="lien_group">
            <li class="lien active"><a href="index.html">Home</a></li>
            <li class="lien"><a href="projets.html">Projets</a></li>
            <li class="lien"><a href="about.html">About</a></li>
            <li class="lien"><a href="contact.php">Contact</a></li>
        </ul>
    </nav>


      
    <div id="contact" class="section-contact">

   <!--  formulaire -->
   <!-- <form action="/ma-page-de-traitement" method="post"> -->


   <?php

   $nom = $email = $message = "";

  //  if($_SERVER["REQUEST_METHOD"] == "POST"){
  //   //recupere les données du formulaire 
  //   $nom = $_POST["nom"];
  //   $email = $_POST["email"];
  //   $message = $_POST["message"];

  //  }   

  // Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérer les données du formulaire
  $nom = test_input($_POST["user_name"]);
  $email = test_input($_POST["user_mail"]);
  $message = test_input($_POST["user_message"]);

  // Votre logique de traitement ici (par exemple, enregistrement dans la base de données)
}
   
    // Fonction pour nettoyer les données du formulaire
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
  }

   ?>


  <!-- if(!empty($nom) && !empty($email) && !empty($message))-->


   <form  method="post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);  ?>" >

    <ul>
      <li>
        <label for="name">Nom:</label>
        <input type="text" id="name" name="user_name" placeholder="Votre Nom" value="<?php echo $nom; ?>" required/>
      </li>
      <li>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_mail" placeholder="Votre Email" value = "<?php echo $email ; ?>" required  />
      </li>
      <li>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message" placeholder="Message" value = "<?php echo $message ; ?>"></textarea>
      </li>
    </ul>

    <div class="button">
    <button type="submit">Envoyer le message</button>
  </div>

  </form>
</div>
    </div>
   </section>
   
 <!--footer-->
   
   <section>Ouattara Siapri Mariam</section>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Estiam<span>logo</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Projets</a>
				
					<a href="#">About</a>
				
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name"> work hard ,stay humble © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>25/27 Avenue</span> de la République</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+336 67-47-08-64</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">siapriouattara23@hotmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About Siapri</span>
					C'est ma passion qui m'anime
				</p>

        <a href="https://www.linkedin.com/in/ouattara-siapri/">
                        <img src="images/linkedin.png" alt="linkedin" width="15%">
                    </a>

					<a href="https://github.com/siapri21">
                        <img src="images/github.png" alt="github" width="15%">
                    </a>

			</div>

		</footer>
</body>
</html>