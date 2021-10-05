import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';
// we can put getBasketTotal inside this but its good practice to put selectors inside reducer
function Subtotal() {
    const history=useHistory();
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
            {/* we used history .It will push the payment page into stack and moreover we want it to be like button not link. */}
        </div>
    )
}

export default Subtotal
