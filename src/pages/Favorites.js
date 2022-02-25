import { useContext } from "react";
import MeetupLists from "../components/meetups/MeetupLists";
import FavoritesContext from "../store/FavoritesContext";

function Favorites() {
  const favoritsCtx = useContext(FavoritesContext);

  let content;

  if (favoritsCtx.totalFavorites === 0) {
    content = <p style={{color: 'red', alignContent: 'center'}}>You got no favorites yet, Start adding some cars...</p>;
  } else {
    content = <MeetupLists meetups={favoritsCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
