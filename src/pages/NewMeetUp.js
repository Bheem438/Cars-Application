import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetUp() {
  const navigate = useNavigate();

  function addCarsHandler(carsData){
    fetch('https://react-cars-43491-default-rtdb.firebaseio.com/cars.json',
    {
      method: 'POST',
      body: JSON.stringify(carsData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(()=>{
      navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New Car</h1>
      <NewMeetupForm onAddCars={addCarsHandler} />
    </section>
  )
}

export default NewMeetUp
