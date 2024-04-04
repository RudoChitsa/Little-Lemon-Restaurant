import Menu from "./Components/Menu/menu";
import Intro from "./Components/Intro/intro";
import FoodMenu from "./Components/FoodMenu/foodmenu";
import Reservations from "./Components/Reservations/reservations";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Intro />
      <FoodMenu />
      <Reservations />
    </div>
  );
}

export default App;
