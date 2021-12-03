import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY =
  "pk_test_51K2VJ8DJXkEMli3lSCYmQgPbJRDPzM0g6TghCDLJMourtmLmt8xKXyyhHCTbpcOl8rMgb2BebzNZ3MisGUn3qpN800DNRGefyL";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = () => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest;
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Hyerin Shop"
          image="https://postfiles.pstatic.net/MjAxOTA2MTlfMTEz/MDAxNTYwOTI3NzQ1MDg0.mV3YSPFuFYgwBCNdXh8088RV2MbHAqGf7wRnNr7DmDYg.SWdTlcL1IAKEOA6AOW6bzIQSQTk7iwL2oTVyipTDiKUg.JPEG.lilia94/IMG_0611.JPG?type=w773"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
