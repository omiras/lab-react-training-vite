import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import { ClickablePicture } from "./components/ClickablePicture";
import RGBColorPicker from "./components/RGBColorPicker";


function App() {


  return (
    <div className="App" data-whatever={{
      valor: 1
    }}>
      <h1> LAB | React Training</h1>
      <div className="container container-component">

        <RGBColorPicker />



        {/* <Random min={1} max={6} />
        <Random min={1} max={100} />
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='DAniel'
          gender='male'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <ClickablePicture img="https://cdn2.thecatapi.com/images/2bn.jpg" imgClicked="https://cdn2.thecatapi.com/images/6hj.jpg" /> */}
      </div>
    </div >
  );
}

export default App;
