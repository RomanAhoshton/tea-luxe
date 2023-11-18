import Header from "./components/Header";
import "./App.scss";
import MainBanner from "./components/MainBanner";
import ExploreCollection from "./components/ExploreCollection";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <MainBanner/>
      <ExploreCollection/>
    </div>
  );
}

export default App;
