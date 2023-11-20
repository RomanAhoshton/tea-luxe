import Header from "./components/Header";
import "./App.scss";
import MainBanner from "./components/MainBanner";
import ExploreCollection from "./components/ExploreCollection";
import ClientSay from "./components/ClientSay";
import TeaBlog from "./components/TeaBlog";
import Join from "./components/Join";
import Prioritise from "./components/Prioritise";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <MainBanner />
      <ExploreCollection />
      <ClientSay />
      <TeaBlog />
      <Join />
      <Prioritise />
      <Footer />
    </div>
  );
}

export default App;
