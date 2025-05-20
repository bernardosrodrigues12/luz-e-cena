import Header from './components/Header'
import Banner from "./components/Banner";
import MovieSection from './components/MovieSection';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
    <Header />
    <Banner src="../public/assets/images/Banner Desktop.png" alt="Banner"/>
    <MovieSection />
    <Banner src='../public/assets/images/Banner Combo Desktop.png' alt='Combo'/>
    <Newsletter />
    </>
)
}

export default App;