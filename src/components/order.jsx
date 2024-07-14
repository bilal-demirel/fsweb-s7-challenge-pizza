import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/order.css";
import logo from "../../Assets/mile1-assets/logo.svg"
import pizzaLogo from "../../Assets/mile1-assets/order-header.png"

export default function Order() {
    const history = useHistory();
    let price = 85.5;
    let strPrice = price.toString() + "0₺";
    let rating = 4.9;
    let rateCounter = 200;

    const [radioSelected, setRadioSelection] = useState(" ");
    const [dropdownSelected, setDropdownSelection] = useState(" ");
    const [note, setNote] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("Girilen isim en az 3 harfli olmalı.");
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(85.5);
    const [additionalsPrice, setAdditionalsPrice] = useState(0);
    const [checkboxSelected, setCheckboxSelection] = useState([
        { id: 1, label: "Pepperoni", checked: false },
        { id: 2, label: "Sosis", checked: false },
        { id: 3, label: "Kanada Jambonu", checked: false },
        { id: 4, label: "Tavuk Izgara", checked: false },
        { id: 5, label: "Soğan", checked: false },
        { id: 6, label: "Domates", checked: false },
        { id: 7, label: "Mısır", checked: false },
        { id: 8, label: "Sucuk", checked: false },
        { id: 9, label: "Jalepeno", checked: false },
        { id: 10, label: "Sarımsak", checked: false },
        { id: 11, label: "Biber", checked: false },
        { id: 12, label: "Sucuk", checked: false },
        { id: 13, label: "Ananas", checked: false },
        { id: 14, label: "Kabak", checked: false },
    ]);


    const toHomePage = () => {
        history.push("/");
    }

    const handleChangeRadio = (event) => {
        setRadioSelection(event.target.value);
    }

    const handleChangeDropdown = (event) => {
        setDropdownSelection(event.target.value);
    }

    const handleCheckBox = (checkbox) => {
        let newCheckBox = [...checkboxSelected];
        let checkedCounter = 0;
        for (let i = 0; i < checkboxSelected.length; i++) {
            if (checkboxSelected[i]["id"] === checkbox["id"]) {
                newCheckBox[i]["checked"] = !checkboxSelected[i]["checked"];
            }
            if (checkboxSelected[i]["checked"] === true) {
                checkedCounter++;
            }
        }
        if (checkedCounter > 10) {
            alert("En fazla 10 ek malzeme seçebilirsiniz!");
        } else {
            setCheckboxSelection(newCheckBox);
            handleAdditionalsPrice();
        }
    }

    const handleChangeText = (event) => {
        setNote(event.target.value);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        if (name.length < 3) {
          setNameError("Girilen isim en az 3 harfli olmalı.");
        } else {
            setNameError('');
        }
      }, [name]);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAdditionalsPrice = () => {
        let addPrice = 0;
        for (let i = 0; i < checkboxSelected.length; i++) {
            if (checkboxSelected[i]["checked"] === true) {
                addPrice += 5;
            }
        }
        setAdditionalsPrice(addPrice);
    }

    useEffect(() => {
        setTotalPrice(quantity * (additionalsPrice + 85.5));
    }, [additionalsPrice, quantity]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let checkedCounter = 0;
        for (let i = 0; i < checkboxSelected.length; i++) {
            if (checkboxSelected[i]["checked"] === true) {
                checkedCounter++;
            }
        }
        if (radioSelected === " ") {
            alert("Pizza boyutu seçimi yapmalısınız.");
        } else if (dropdownSelected === " ") {
            alert("Pizza hamuru tercihi seçimi yapmalısınız.");
        } else if (checkedCounter < 4) {
            alert("En az 4 ek malzeme seçmelisiniz.");
        } else if(name.length < 3){
            alert("En az 3 harften oluşan bir isim girmelisiniz.");
        } else {
            let orderDetails = {
                size: radioSelected,
                thinness: dropdownSelected,
                additionals: checkboxSelected,
                additionalsPrice: additionalsPrice,
                totalPrice: totalPrice
            }

            axios.post("https://reqres.in/api/pizza", orderDetails)
                .then(() => {
                    history.push("/orderapproval", { orderDetails });
                })

        }
    }

    return (
        <div className="order-container">
            <div className="logo-div">
                <img className="order-logo" src={logo} />
            </div>
            <div className="order-pizza">
                <img className="order-pizza-logo" src={pizzaLogo} />
            </div>
            <div className="order-top-div">
                <div className="order-path">
                    <p className="order-path-1">Anasayfa - Seçenekler -&nbsp;</p>
                    <p className="order-path-2">Sipariş Oluştur</p>
                </div>
                <h4 className="pizza-title">Position Absolute Acı Pizza</h4>
                <div className="price-container">
                    <h2 className="price-line">{strPrice}</h2>
                    <p className="rate-line">{rating}</p>
                    <p className="counter-line">{"(" + rateCounter + ")"}</p>
                </div>
                <p className="details-line">
                    Fronetend Dev olarak hala position:absolute kullanıyortsan bu çok acı pizza
                    tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
                    kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta
                    pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                    oluşan İtalyan kökenli lezzeli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="size-thinness">
                    <div className="radio">
                        <h4>Boyut Seç *</h4>
                        <input
                            type="radio"
                            id="smallPizza"
                            name="pizzaSize"
                            value="S"
                            checked={radioSelected === "S"}
                            onChange={handleChangeRadio}
                        />
                        <label htmlFor="smallPizza">S</label>

                        <input
                            type="radio"
                            id="mediumPizza"
                            name="pizzaSize"
                            value="M"
                            checked={radioSelected === "M"}
                            onChange={handleChangeRadio}
                        />
                        <label htmlFor="mediumPizza">M</label>

                        <input
                            type="radio"
                            id="bigPizza"
                            name="pizzaSize"
                            value="L"
                            checked={radioSelected === "L"}
                            onChange={handleChangeRadio}
                        />
                        <label htmlFor="bigPizza">L</label>
                    </div>

                    <div className="dropdown">
                        <h4>Hamur Seç *</h4>
                        <select className="dropdown-select" value={dropdownSelected} onChange={handleChangeDropdown}>
                            <option value="selection">Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                    </div>
                </div>
                <div className="checkbox">
                    <h4>Ek Malzemeler</h4>
                    <p>En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="checkbox-container">
                        {
                            checkboxSelected.map((checkbox) => (
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={checkbox.checked}
                                        onChange={() => handleCheckBox(checkbox)}
                                    />
                                    {checkbox["label"]}
                                </label>
                            ))
                        }
                    </div>
                </div>

                <div className="text-area-name">
                    <h4>İsim &nbsp;</h4>
                    <form>
                        <textarea 
                            value={name}
                            placeholder="Lütfen isminizi yazınız."
                            onChange={handleChangeName}
                        />
                    </form>
                    <p style={{fontWeight: "300", opacity: "0.7"}}>{nameError}</p>
                </div>

                <div className="text-area">
                    <h4>Sipariş Notu</h4>
                    <form>
                        <textarea
                            value={note}
                            placeholder="Siparişe eklemek istediğiniz bir not var mı?"
                            onChange={handleChangeText}
                        />
                    </form>
                </div>

                <div className="order-summary">
                    <div className="quantity">
                        <button type="button" onClick={decreaseQuantity}>-</button>
                        <input type="text" value={quantity} readOnly />
                        <button type="button" onClick={increaseQuantity}>+</button>
                    </div>

                    <div className="order-prices">
                        <div className="order-prices-nobtn">
                            <h4 style={{ paddingBottom: "1rem" }}>Sipariş Toplamı</h4>
                            <p>Seçimler {additionalsPrice}₺</p>
                            <p>Toplam {totalPrice}₺</p>
                        </div>
                        <button type="submit">SİPARİŞ VER</button>
                    </div>
                </div>
            </form>
        </div>
    );
}