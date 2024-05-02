import Avatar from "./avatar";
import FullNam from "./fullName";
import Hobbies from './hobbies';
import Contact from "./contact";

export default function User(){
    const userFormat ={
        avatar: "/image.jpg",
        fullname: {
            fisrtName: "Hugo",
            lastName: "Lutigneaux",
          },
          hobbies: [
            {
              id: "1",
              titre: "HTML",
              exp: 50,
            },
            {
              id: "2",
              titre: "CSS",
              exp: 60,
            },
            {
              id: "3",
              titre: "Javascript",
              exp: 40,
            },
            {
              id: "4",
              titre: "React",
              exp: 0,
            },
          ],
          contact: {
            email: "huggolutig,eaux@gmail.com",
            tel: "06 06 06 06",
          },
        };
        return(
            <div>

            <Avatar monLien = {userFormat.avatar}></Avatar>
            <FullNam full ={userFormat.fullname.fisrtName} nana={userFormat.fullname.lastName}></FullNam>
            <Hobbies mesHobbies ={userFormat.hobbies}></Hobbies>
            <Contact mesContact={userFormat.contact.email} monTel={userFormat.contact.tel}></Contact>
        </div>

        ) 
      
    }
    


/*Exercice:
Créer un composant User.
Le composant comprendra 3 autres composants :
Avatar : un composant qui affiche une image circulaire.
FullName: un composant contenant lui aussi deux composants :
FirstName: affiche un prénom.
LastName: affiche un nom.
Hobbies : un composant contenant une liste de passions/compétences.
Contact : Un composant qui affiche l’email et le téléphone  accompagné d'icônes. */ 