import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const milageInputRef = useRef();
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredMilage = milageInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;

    const carsData = {
      title: enteredTitle,
      image: enteredImage,
      milage: enteredMilage,
      amount: enteredAmount,
    };
    props.onAddCars(carsData)
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Car Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Car Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="milage">Car Milage</label>
          <input type="text" required id="milage" ref={milageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <textarea
            id="amount"
            required
            rows="5"
            ref={amountInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Car</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
