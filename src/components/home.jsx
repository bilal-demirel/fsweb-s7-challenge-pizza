import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../Assets/mile1-assets/logo.svg"
import koreIcon from "../../Assets/mile2-aseets/icons/1.svg"
import pizzaIcon from "../../Assets/mile2-aseets/icons/2.svg"
import burgerIcon from "../../Assets/mile2-aseets/icons/3.svg"
import friesIcon from "../../Assets/mile2-aseets/icons/4.svg"
import fastFoodIcon from "../../Assets/mile2-aseets/icons/5.svg"
import drinkIcon from "../../Assets/mile2-aseets/icons/6.svg"
import bigCard from "../../Assets/mile2-aseets/cta/kart-1.png"
import smallCard from "../../Assets/mile2-aseets/cta/kart-2.png"
import smallCard2 from "../../Assets/mile2-aseets/cta/kart-3.png"
import "../css/home.css";

export default function Home() {
    const history = useHistory();

    const toOrderPage = () => {
        history.push("/order");
    }

    return (
        <div className="whole-page">
            <div className="main-page">
                <div className="container">
                    <img className="logo" src={logo} />
                    <h1 className="text">KOD ACIKTIRIR</h1>
                    <h1 className="text">PIZZA, DOYURUR</h1>
                    <button className="order-btn" onClick={toOrderPage}>ACIKTIM</button>
                </div>
            </div>

            <div className="categories-div">
                <nav className="categories-nav">
                    <ul>
                        <li>
                            <img src={koreIcon} />
                            YENİ! Kore
                        </li>
                        <li>
                            <img src={pizzaIcon} />
                            Pizza
                        </li>
                        <li>
                            <img src={burgerIcon} />
                            Burger
                        </li>
                        <li>
                            <img src={friesIcon} />
                            Kızartmalar
                        </li>
                        <li>
                            <img src={fastFoodIcon} />
                            Fast Food
                        </li>
                        <li>
                            <img src={drinkIcon} />
                            Gazlı İçecek
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="campaings-div">
                <div className="big-image">
                    <h1>Özel Lezzetus</h1>
                    <p>Position:Absolute Pizza</p>
                    <button>SİPARİŞ VER</button>
                </div>
                <div className="small-images">
                    <div className="small-image-1">
                        <h1 className="small-image-1-h1">Hackthlon</h1>
                        <h1 className="small-image-1-h2">Burger Menü</h1>
                        <button>SİPARİŞ VER</button>
                    </div>
                    <div className="small-image-2">
                        <div className="small-image-2-inner">
                            <div className="small-image-red">
                                <h1 className="small-image-2-first">Çoooook&nbsp;</h1>
                                <h1>hızlı</h1>
                            </div>
                            <h1>npm gibi kurye</h1>
                            <button>SİPARİŞ VER</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="middle-info">
                <h3>en çok paketlenen menüler</h3>
                <h2> Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>

            <div className="below-nav">
                <nav>
                    <ul>
                        <li>
                            <button>
                                <img src={koreIcon} />
                                Ramen
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={pizzaIcon} />
                                Pizza
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={burgerIcon} />
                                Burger
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={friesIcon} />
                                Kızartmalar
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={fastFoodIcon} />
                                Fast Food
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={drinkIcon} />
                                Gazlı İçecek
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div >
    );
}