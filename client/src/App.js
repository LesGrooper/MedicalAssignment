import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Login } from "./components";
import { Home,
  Patient,
  ListPatient,
  CreatePatient,
  DetailPatient,
  EditPatient,
  Doctor,
  ListDoctor,
  CreateDoctor,
  DetailDoctor,
  EditDoctor,
  Ward,
  ListWard,
  CreateWard,
  EditWard,
  DetailWard,
  Assistant,
  ListAssistant,
  CreateAssistant,
  EditAssistant,
  DetailAssistant, } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("acces_token")) {
      setLoginStatus(true);
      // console.log(loginStatus)
    }
    // else {
    //   setLoginStatus(false)
    // }
  }, [loginStatus]);

  return (
    <>
      <div className="container-fluid">
        {loginStatus ? (
          <Routes>
            <Route
              path="/"
              element={<Home />}
              render={props => (<Home loginStatus={loginStatus}
              loginCbHandler={loginCbHandler} />)}
            />
          <Route path="/patients" element={<Patient />}>
              <Route path="" element={<ListPatient />} />
              <Route path="create" element={<CreatePatient />} />
              <Route path="/patients/detail/">
                <Route path=":id" element={<DetailPatient />} />
              </Route>
              <Route path="/patients/update/">
                <Route path=":id" element={<EditPatient />} />
              </Route>
            </Route>

            <Route path="/doctors" element={<Doctor />}>
              <Route path="" element={<ListDoctor />} />
              <Route path="create" element={<CreateDoctor />} />
              <Route path="/doctors/detail">
                <Route path=":id" element={<DetailDoctor />} />
              </Route>
              <Route path="/doctors/update/">
                <Route path=":id" element={<EditDoctor />} />
              </Route>
            </Route>

            <Route path="/wards" element={<Ward />}>
              <Route path="" element={<ListWard />} />
              <Route path="create" element={<CreateWard />} />
              <Route path="/wards/detail">
                <Route path=":id" element={<DetailWard />} />
              </Route>
              <Route path="/wards/update">
                <Route path=":id" element={<EditWard />} />
              </Route>
            </Route>

            <Route path="/assistants" element={<Assistant />}>
              <Route path="" element={<ListAssistant />} />
              <Route path="create" element={<CreateAssistant />} />
              <Route path="/assistants/detail">
                <Route path=":id" element={<DetailAssistant />} />
              </Route>
              <Route path="/assistants/update">
                <Route path=":id" element={<EditAssistant />} />
              </Route>
            </Route>
          </Routes>
        ) : (
          <Login loginCbHandler={loginCbHandler} />
        )}
      </div>
    </>
  );
}

export default App;
