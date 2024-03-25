import Menu from "./Components/Menu/menu";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import FoodMenu from "./Components/FoodMenu/foodmenu";
import Reservations from "./Components/Reservations/reservations";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Intro />
      <About />
      <FoodMenu />
      <Reservations />
    </div>
  );
}

export default App;
