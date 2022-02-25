import { useContext } from "react";
import FavoritesContext from "../../store/FavoritesContext";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritsCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritsCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler(){
      if(itemIsFavorite){
        favoritsCtx.removeFavorites(props.id);
      }
      else{
        favoritsCtx.addFavorites({
          id: props.id,
          title: props.title,
          image: props.image,
          milage: props.milage,
          amount: props.amount,
        })
      }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.milage}</address>
          <p>{props.amount}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
