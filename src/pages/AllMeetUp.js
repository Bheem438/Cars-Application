import { useEffect, useState } from "react";
import MeetupLists from "../components/meetups/MeetupLists";

function AllMeetUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCars, setLoadedCars] = useState([]);

  useEffect(() => {
    fetch("https://react-cars-43491-default-rtdb.firebaseio.com/cars.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cars = [];
        for (const key in data) {
          const car = {
            id: key,
            ...data[key],
          };
          cars.push(car);
        }
        setIsLoading(false);
        setLoadedCars(cars);
      });
  }, []);
  
  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <MeetupLists meetups={loadedCars} />
    </div>
  );
}

export default AllMeetUp;
