import React, { useEffect } from "react";
import Topbar from "./topbar";
import Sidebarr from "./sidebar";
import "../index.css";
import "../Styles/courses.css";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { courses, courseTomato } from "../assets/data";
import "react-toastify/dist/ReactToastify.css";
import applyAHP from "../Components/applyAHP";
import { logo } from "../utils/images";

const StudentScreen = (props) => {
  const data = courses;
  const dataTomatos = courseTomato;
  // console.log("Les datas des courses sont : ", data);
  const autheInfos = localStorage.getItem("AuthInfo");
  const bestCourse = applyAHP(data);

  const tomatoBescourse = applyAHP(dataTomatos);

  // console.log("The best course is : ", bestCourse);

  const autheInfosFormated = JSON.parse(autheInfos);
  useEffect(() => {
    if (autheInfos === null) {
      setTimeout(() => {
        toast.info("You are not connected, try to connect");
      }, 1000);
      props.history.push("/login");
    } else {
      toast.success(`Connected : ${autheInfosFormated?.user?.email}`);
    }
  }, []);
  return (
    <div className="content">
      <Sidebarr user={autheInfosFormated?.user} />
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
      <Box width="100%" justifyContent="space-between">
        <Topbar />
        <main className="mainSection">
          {/* Here we will write this section's code */}
          <h1 style={{ color: "#f9a825", padding: "10px" }}>
            Cassava Cultivation Course{" "}
          </h1>
          <section className="container-fluid">
            <div className="row">
              {data.map((item) => (
                <div className="courseItem col-md-7 col-6 col-lg-2">
                  <div className="courseTop">
                    {bestCourse?.id === item.id ? (
                      <h2 className="recomanderCourse">recommends</h2>
                    ) : (
                      ""
                    )}
                    <img
                      alt="image cover course "
                      className="imageCourse"
                      src={logo}
                    />
                  </div>
                  <div className="courseBottom">
                    <p className="courseTitle">{item.title} </p>
                    <p className="teachername">Dr cassava Island</p>

                    <p className="ratingCourse">
                      {item.rating === 3 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 1 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 4 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 2 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 5 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p className="princeCourse">{item.cost} Fcfa </p>
                      <p className="hoursCourse">{item.hours} h</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/*//////////////////////////////////////////// TOMATO SECTION ////////////////////////////////////////////////// */}

          {/* Here we will write this section's code */}
          <h1 style={{ color: "#f9a825", padding: "10px" }}>
            Tomato Cultivation Course{" "}
          </h1>
          <section className="container-fluid">
            <div className="row">
              {dataTomatos.map((item) => (
                <div className="courseItem col-md-7 col-6 col-lg-2">
                  <div className="courseTop">
                    {tomatoBescourse?.id === item.id ? (
                      <h2 className="recomanderCourse">recommends</h2>
                    ) : (
                      ""
                    )}
                    <img
                      alt="image cover course "
                      className="imageCourse"
                      src={logo}
                    />
                  </div>
                  <div className="courseBottom">
                    <p className="courseTitle">{item.title} </p>
                    <p className="teachername">Dr cassava Island</p>

                    <p className="ratingCourse">
                      {item.rating === 3 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 1 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 4 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 2 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star "></span>
                          <span class="fa fa-star"></span>
                        </div>
                      ) : item.rating === 5 ? (
                        <div>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked "></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p className="princeCourse">{item.cost} Fcfa </p>
                      <p className="hoursCourse">{item.hours} h</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Box>
    </div>
  );
};

export default StudentScreen;
