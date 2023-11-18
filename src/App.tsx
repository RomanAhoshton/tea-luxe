import Header from "./components/Header";
import "./App.scss";
import MainBanner from "./components/MainBanner";
import ExploreCollection from "./components/ExploreCollection";
import ClientSay from "./components/ClientSay";
import TeaBlog from "./components/TeaBlog";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <MainBanner/>
      <ExploreCollection/>
      <ClientSay/>
      <TeaBlog/>
    </div>
  );
}

export default App;
