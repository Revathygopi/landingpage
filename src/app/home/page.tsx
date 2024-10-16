import Digital from "./components/digitalfeature/digital";
import Ecosystem from "./components/ecosystem/ecosystem";
import Feature from "./components/featuregrowth/feature";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Mobility from "./components/mobility/mobility";
import Navbar from "./components/navbar/navbar";
import Supplychain from "./components/supplychain/suppychain";
import styles from './page.module.css'

export default function App() {
    return (
        <div>
            <div className={styles.heronav}>
                <Navbar></Navbar>
                <Hero></Hero>
            </div>
            <Supplychain></Supplychain>
            <Ecosystem></Ecosystem>
            <Mobility></Mobility>
            <Digital></Digital>
            <Feature></Feature>
            <Footer></Footer>
        </div>

    )
}