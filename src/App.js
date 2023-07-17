import "./App.css";
import Entete from "./Entet/Entete";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main1 from "./Main/Main1";
import CartList from "./Main/CartList";
import { useState } from "react";
import AAddmovies from "./Main/AAddmovies";

const tab = () => [
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdHl0BkW9ysZaN5rw7XYjtAqpGmoHNza18GSAjH09r3b7eCN_unx7aXGYSur5Z6AMSYutl0VptxD-LK8Sl5-Zxf8uRnhP8xIAJf-TPHP4pSPxXxnkFOlf4_3Dg22miX9GS0Z.jpg?r=eb5 ",
    title: "Tyler Rake 2",
    texte:
      "Ayant échappé de peu à la mort, l'intrépide mercenaire Tyler Rake revient pour une nouvelle mission périlleuse : extraire de prison la famille d'un impitoyable gangster.",
    rating: 5,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfcUAoqF74FrhC4hj1TMPxXl-88PdD3iWI27F9jkcU9-1aep5mXvxbO0oEgyrnX6zB9aaZOUKbyful6EQr0WWleURMYXBIOoLW4.jpg?r=d36",
    title: "Mortal Engines",
    texte:
      "Dans un nouveau monde post-apocalyptique, une jeune femme et ses amis rebelles tentent d'empêcher la cité mobile de Londres de tout engloutir sur son passage.",
    rating: 3,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTvH-KKZOptDhdnLxOuTqfD-gIcSQbc1OtZoLic7iokSCiYuTZJvISpzKxJ4Bzqt-P3KV9KZVaaTCewTsgvo_6Jtzr2dv6siqCTjJfYC5q5rDBvMeNtYNIkwPyACtFAQlVEe.jpg?r=b32",
    title: "The Mother",
    texte:
      "Une tueuse à gages formée par l'armée sort de sa clandestinité pour protéger sa fille, qu'elle n'a jamais connue, contre des criminels impitoyables réclamant vengeance.",
    rating: 4,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWTrJhDP7SvxekRJBwTcRf9Sa2pGo9Hd6WJI4VtE4HQieciT02IPaOjwJWMY-HCeYLEpFEBo4o-p1P08sri3RfxW8zsFI1cx-qY5o_rrFit_YUq8H36edjyMayEbrnURxm5b.jpg?r=794",
    title: "ATHENA",
    texte:
      "Trois frères se retrouvent au cœur du conflit acharné qui embrase la cité Athena après la mort tragique de leur benjamin.",
    rating: 2,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSL_MHQrKLyLxwn7QCaCvIxMIzMui9F7gAamoT3TYdE4tr9EeOK7xO3zsM9b28UOEeYsQgzOy3DHrvkXrPu_SRpXcCTVsHutZhw.jpg?r=944",
    title: "Sniper: Assassin's End",
    texte:
      "Cible d'un complot l'accusant d'un meurtre qu'il n'a pas commis, un sniper des forces spéciales fait appel à son père, tireur d'élite réputé, pour trouver le vrai tueur.",
    rating: 4,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQWIgBO_EFhOKrvusmvJ65y8sI24OEmAMpeLrnGtbfX4WasnUl3oPS1Q4Lu2ttWYw5O4WeAWN-kko_WW1qeF3PR-y-OWn3Dg7oQ4wGuVYaNMksrS439WmckoepQLc_IfaqrF.jpg?r=347",
    title: "Red Notice",
    texte:
      "Un agent du FBI est forcé de faire équipe avec le voleur d'art le plus recherché de la planète pour coincer une insaisissable criminelle qui a toujours un coup d'avance.",
    rating: 5,
  },
  {
    id: Math.random(),
    imagURL:
      "https://occ-0-55-116.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXpqxAM5AT4-_qOimzAAs5I1wn6RBL-8DE2lBEYs45DAWP9gLRSZ5aG8V04msq0dVQnvVzVPxP3UcEaG2J7etN_dXzglaWP-BoU.jpg?r=92b",
    title: "seul au monde",
    texte:
      "Après un accident d'avion, un homme échoue sur une île déserte. Pendant des années, il lutte pour survivre, porté par l'espoir de rentrer un jour chez lui.",
    rating: 3,
  },
];

function App() {
  const [movies, setMovies] = useState(tab);
  const [search, setSearch] = useState("");
  const [ratefil, setRatefil] = useState(1);
  const handelDelet = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };
  const handelAdd = (newmovie) => {
    setMovies([...movies, newmovie]);
  };
  const handelsearch = (e) => {
    setSearch(e.target.value);
  };
  const handelreting = (x) => {
    setRatefil(x);
  };
  return (
    <div className="App" style={{ backgroundColor: "#0e0905" }}>
      <Entete />

      <Main1
        fil={handelsearch}
        search={search}
        handelreting={handelreting}
        ratefil={ratefil}
      />
      <AAddmovies add={handelAdd} />
      <CartList
        movies={movies.filter(
          (el) =>
            el.title
              .trim()
              .toLowerCase()
              .includes(search.trim().toLowerCase()) && el.rating >= ratefil
        )}
        del={handelDelet}
      />
    </div>
  );
}

export default App;
