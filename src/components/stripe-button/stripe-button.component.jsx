import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JuMY8LJdWOuf0mOekF2MaDiuVqeRslAC0EKScYmw0qlAKdtBEtcoGoSHNL2kmozOc0EMrKAozlrK2m6KRfzitZi00ol6enyEP";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is £${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
