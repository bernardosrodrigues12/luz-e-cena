import Header from './components/Header'
import Banner from "./components/Banner";
import Link from "./components/Link";

function App() {
  return (
    <>
    <Header/>
    <Banner src="../public/assets/images/Banner Desktop.png" alt="Banner"/>
    <Link  href="/" target="_blank">Link</Link>
    </>
)
}

export default App;