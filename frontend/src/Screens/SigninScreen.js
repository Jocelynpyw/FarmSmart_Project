import React, { useCallback, useEffect, useState } from "react";
import Footer from "../Components/AfterLogin/Footer";
import Navbar from "../Components/AfterLogin/Navbar";
import "../Styles/AfterLoginStyles/SigninScreen.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function SigninScreen(props) {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [userNameSignup, setUserNameSignup] = useState("");
  const [userPasswordSignUp1, setUserPasswordSignUp1] = useState("");
  const [userPasswordSignUp2, setUserPasswordSignUp2] = useState("");
  const [userEmailSignUp, setUserEmailSignUp] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  //SignIn varaibles
  const [userEmailSignIn, setUserEmailSignIn] = useState("je suis  beau");
  const [userPasswordSignIn, setUserPasswordSignIn] = useState("je suis ;a");

  const handleSignin = () => {
    setSignUp(true);
    setSignIn(false);
  };
  const handleSignup = () => {
    setSignUp(false);
    setSignIn(true);
  };

  const signInFunction = () => {
    // console.log("les email sont : ", userEmailSignIn);
    alert(
      `\n Voici les informations que vous avez saisit  UserEmail : ${userEmailSignIn} \n UserEmail: ${userPasswordSignIn}`
    );
  };

  const signUpFunction = () => {
    setLoading(true);

    axios({
      method: "post",
      url: "https://farm-smart.onrender.com/users/register/student/",
      data: {
        birthDay: "2023-5-22",
        nationality: "cameroon",
        phone: "696114119",
        user: {
          email: userEmailSignUp,
          gender: "Female",
          first_name: userNameSignup,
          last_name: "jocel",
          password: userPasswordSignUp1,
        },
      },

      // data: {
      //   firstName: "Fred",
      //   lastName: "Flintstone",
      // },
    })
      .then((response) => {
        setLoading(false);
        if (response.data.user?.id) {
          localStorage.setItem("AuthInfo", JSON.stringify(response.data));
          toast.success("Register successFull!");
          setTimeout(() => {
            props.history.push("/student");
          }, 2000);
          // setSignUp(false);
          // setSignIn(true);
        } else if (
          response.data.user?.email[0] ===
          "Admin with this Email adress already exists."
        ) {
          toast.info("This email already exist");
          // console.log("Cette email existe deja dans notre system");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("An internal error or connection problem has occurred");

        // console.log("Voici l'erreur ", err);
      });
  };
  useEffect(() => {
    const AuthInfo = localStorage.getItem("AuthInfo");
    const AuthInfoFormated = JSON.parse(AuthInfo);
    setUserEmailSignIn(
      AuthInfoFormated?.user.email ? AuthInfoFormated?.user.email : ""
    );
  }, [signIn]);

  return (
    <div>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/*  Signin */}
      {signIn && (
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
            <div className="col-md-6 col-xs-12 col-sm-12 signin-box">
              <div
                className="logo-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <img
                  src="images/LeetCode_logo_rvs.png"
                  className="logo-img"
                  style={{ width: "6rem" }}
                  alt="logo"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  or E-mail"
                  onChange={(e) => setUserEmailSignIn(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => setUserPasswordSignIn(e.target.value)}
                />
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  id="btn-signin"
                  onClick={signInFunction}
                  disabled={
                    userEmailSignIn === "" || userPasswordSignIn === ""
                      ? true
                      : false
                  }
                >
                  Sign In
                </button>
              </div>
              <div className="before-signin-btn">
                <p>Forgot Password?</p>
                <p style={{ cursor: "pointer" }} onClick={handleSignin}>
                  Sign Up
                </p>
              </div>
              <div className="other-signin-method">
                <p style={{ marginBottom: "2rem" }}>or you can sign in with</p>

                <div className="other-signin-method-images">
                  <span className="icon github-icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span className="icon google-icon">
                    <i class="fab fa-google"></i>{" "}
                  </span>
                  <span className="icon facebook-icon">
                    <i class="fab fa-facebook"></i>{" "}
                  </span>
                  <span className="icon spinner-icon">
                    <i class="fas fa-spinner"></i>{" "}
                  </span>
                </div>
              </div>
              <div>
                <p className="texte">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
          </div>
        </div>
      )}

      {/* singn Up */}
      {signUp && (
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
            <div className="col-md-6 col-xs-12 col-sm-12 signin-box">
              <div
                className="logo-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <img
                  src="images/LeetCode_logo_rvs.png"
                  className="logo-img"
                  style={{ width: "6rem" }}
                  alt="logo"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="texte"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  "
                  onChange={(e) => setUserNameSignup(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  onChange={(e) => setUserPasswordSignUp1(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm Password"
                  onChange={(e) => setUserPasswordSignUp2(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username  or E-mail"
                  onChange={(e) => setUserEmailSignUp(e.target.value)}
                />
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  id="btn-signin"
                  disabled={
                    userEmailSignUp === "" ||
                    userPasswordSignUp1 === "" ||
                    userNameSignup === ""
                      ? true
                      : false
                  }
                  onClick={signUpFunction}
                >
                  {loading === true ? "Sign Up..." : "Sign Up"}
                </button>
              </div>
              <div className="before-signin-btn">
                <p>Forgot Password?</p>
                <p style={{ cursor: "pointer" }} onClick={handleSignup}>
                  {" "}
                  Sign In
                </p>
              </div>
              <div className="other-signin-method">
                <p style={{ marginBottom: "2rem" }}>or you can sign in with</p>
                <div className="other-signin-method-images">
                  <span className="icon github-icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span className="icon google-icon">
                    <i class="fab fa-google"></i>{" "}
                  </span>
                  <span className="icon facebook-icon">
                    <i class="fab fa-facebook"></i>{" "}
                  </span>
                </div>
              </div>
              <div>
                <p className="texte">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12"></div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SigninScreen;
