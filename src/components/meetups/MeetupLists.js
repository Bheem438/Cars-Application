import MeetupItem from "./MeetupItem";
import classes from "./MeetupLists.module.css";

function MeetupLists(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((item) => {
        return (
          <MeetupItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            milage={item.milage}
            amount={item.amount}
          />
        );
      })}
    </ul>
  );
}
export default MeetupLists;
