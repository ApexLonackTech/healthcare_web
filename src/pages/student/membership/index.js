import React, { useState } from "react";
import { Footer, MenuBar } from "../../../layout/welcome";
import { addComma } from "../../../utils/currency";
import { toast } from "react-toastify";
import { authGetRequest, authPostRequest } from "../../api/laravel/public/api";
import { poster } from "../../api/laravel/fetcher";
import { errorMessage, successMessage } from "../../../utils/notification";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { PayButton } from "../../../components";
import { MembershipContext } from "../../../context/membership/membership";
import { useRouter } from "next/router";

const membership = () => {
  const [input, setInput] = React.useState({});
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { changeMembership, membership } = React.useContext(MembershipContext);
  const router = useRouter();

  React.useEffect(() => {
    membershipList();
  }, []);

  const membershipList = async () => {
    let resp = await authGetRequest(`/account/membership/list`);
    setData(resp.data_r);
  };

  const subscribeMembership = async (resp, type, id) => {
    input["plan_id"] = id;
    input["reference"] = resp;
    setLoading(true);
    const { data_r, message, isError, isLoading } = await authPostRequest(
      "/account/membership/subscribe/1",
      input
    );
    if (isError) {
      errorMessage(toast, message);
    } else {
      changeMembership(data_r);
      if (data_r) {
        router.push("/student/home");
      } else {
        errorMessage(toast, "Kindly subscribe to a membership plan");
      }
    }
    setLoading(false);
  };

  return (
    <div className="">
      <MenuBar />
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center  d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-4">Become a Member</h1>
        <p className="lead w-50">
          Choose your plan below to explore our courses and get certified. We
          help to build and prepare you for opportunities ahead.
        </p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="row d-flex flex-row align-items-center justify-content-center">
            {data?.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{item.title}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {addComma(item.amount)}{" "}
                      <small className="text-muted">
                        / {item.duration_type}
                      </small>
                    </h1>
                    <div
                      className="list-unstyled mt-3 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: item?.content,
                      }}
                    ></div>

                    <PayButton
                      loading={loading}
                      id={item.id}
                      type={item.is_payment}
                      order_ref={item.title + "_" + item.id}
                      amount={item.amount}
                      onSubmit={subscribeMembership}
                    />
                    {/* <button
                      type="button"
                      onClick={() => subscribeMembership(item.id)}
                      className="btn btn-lg btn-block btn-outline-primary"
                    >
                      Choose Plan
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer> */}
      </div>
      <Footer />
    </div>
  );
};

export default membership;
