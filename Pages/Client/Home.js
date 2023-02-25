import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return `
    ${Header()}
    ${Banner()}
    ${About()}
    ${Projects()}
    ${Contact()}
    ${Footer()}
  `;
};

export default Home;
