import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import "../css/orderapproval.css";

export default function OrderApproval() {
    const history = useHistory();
    //const {size, thinness, additionals} = props;
    const location = useLocation();
    const orderDetails = location.state.orderDetails;
    console.log(orderDetails);

    let additionals = [];

    for (let i = 0; i < orderDetails.additionals.length; i++) {
        if (orderDetails.additionals[i]["checked"] === true) {
            additionals.push(orderDetails.additionals[i]["label"]);
        }
    }

    const toHomePage = () => {
        history.push("/");
    }

    return (
        <body className="approval-body">
            <div className="approval-container">
                <h3 className="lezzet-tag">lezzetin yolda</h3>
                <h1 className="confirm-tag">SİPARİŞ ALINDI</h1>
                <div className="final-pizza-details">
                    <p className="approval-pizza-title">Position Absolute Acı Pizza</p>
                    <div className="three-pizza-details">
                        <div className="approval-size">
                            <p className="approval-size-tag">Boyut:&nbsp;</p>
                            <p className="approval-size-value">{orderDetails.size}</p>
                        </div>
                        <div className="approval-thinness">
                            <p className="approval-thinness-tag">Hamur:&nbsp;</p>
                            <p className="approval-thinness-value">{orderDetails.thinness}</p>
                        </div>
                        <div className="approval-additionals">
                            <p className="approval-additionals-tag">Ek Malzemeler:&nbsp;</p>
                            <p className="approval-additionals-value">{additionals.join(", ")}</p>
                        </div>
                    </div>
                </div>
                <div className="order-summary-card">
                    <h4 className="order-summary-header">Sipariş Toplamı</h4>
                    <div className="summary-choose-container">
                        <p className="summary-choose-text">Seçimler</p>
                        <p className="summary-choose-price">{orderDetails.additionalsPrice}₺</p>
                    </div>
                    <div className="summary-total-container">
                        <p className="summary-total-text">Toplam </p>
                        <p className="summary-total-price">{orderDetails.totalPrice}₺</p>
                    </div>
                </div>
            </div>
        </body>
    );
}