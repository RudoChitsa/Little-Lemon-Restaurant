import Menu from "./Components/Menu/menu";
import Intro from "./Components/Intro/intro";
import FoodMenu from "./Components/FoodMenu/foodmenu";
import Reservations from "./Components/Reservations/reservations";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Intro />
      <FoodMenu />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
