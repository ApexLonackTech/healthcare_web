import { CircularProgress } from "@mui/material";
import { useFlutterwave } from "flutterwave-react-v3";
import React from "react";
import { AuthContext } from "../../context/auth/ApiContext";
import { settingContext } from "../../context/Setting/Setting";

function PayButton(props) {
  const { amount, order_ref, type, onSubmit, id, loading } = props;
  const { user } = React.useContext(AuthContext);
  const { setting } = React.useContext(settingContext);
  const configFlutter = {
    public_key: setting?.flutter_public_key,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: user?.email,
      phonenumber: user?.phone,
      name: user?.first_name + " " + user?.last_name,
    },
    customizations: {
      title: user?.first_name + " " + user?.last_name,
      description: order_ref,
      logo: "",
    },
  };
  const handleFlutterPayment = useFlutterwave(configFlutter);
  return (
    <>
      {type == 1 && (
        <a
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                onSubmit(response, type, id);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {
                closePaymentModal();
              },
            });
          }}
          className="btn btn-lg btn-block btn-outline-primary"
        >
          {loading && (
            <CircularProgress
              size={15}
              sx={{ color: "white", marginRight: 2 }}
            />
          )}
          {!loading && <b> Choose Plan</b>}
        </a>
      )}
      {type == 0 && (
        <a
          onClick={() => onSubmit(null, type, id)}
          className="btn btn-lg btn-block btn-outline-primary"
        >
          {loading && (
            <CircularProgress
              size={15}
              sx={{ color: "white", marginRight: 2 }}
            />
          )}
          {!loading && <b> Choose Plan</b>}
        </a>
      )}
    </>
  );
}

export default PayButton;
