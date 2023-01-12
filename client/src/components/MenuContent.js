import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
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
  DetailAssistant
} from "../pages";

const MenuContent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact index path="/" element={<Home />} />
          <Route exact path="/patients" element={<Patient />}>
            <Route path="" element={<ListPatient />} />
            <Route path="create" element={<CreatePatient />} />
            <Route path="/patients/detail/">
              <Route exact path=":id" element={<DetailPatient />} />
            </Route>
            <Route path="/patients/update/">
              <Route exact path=":id" element={<EditPatient />} />
            </Route>
          </Route>

          <Route exact path="/doctors" element={<Doctor />}>
            <Route path="" element={<ListDoctor />} />
            <Route path="create" element={<CreateDoctor />} />
            <Route path="/doctors/detail">
              <Route exact path=":id" element={<DetailDoctor />} />
            </Route>
            <Route path="/doctors/update/">
              <Route exact path=":id" element={<EditDoctor />} />
            </Route>
          </Route>

          <Route exact path="/wards" element={<Ward />}>
              <Route path="" element={<ListWard/>} />
              <Route path="create" element={<CreateWard/>} />
              <Route exact path="/wards/detail">
                  <Route exact path=":id" element={<DetailWard/>} />
              </Route>
              <Route exact path="/wards/update">
                <Route path=":id" element={<EditWard/>} />
              </Route>
          </Route>

          <Route exact path="/assistants" element={<Assistant/>}>
            <Route  path="" element={<ListAssistant/>}/>
            <Route  path="create" element={<CreateAssistant/>}/>
            <Route exact path="/assistants/detail">
                <Route exact path=":id" element={<DetailAssistant/>} />
            </Route>
            <Route path="/assistants/update">
                <Route exact path=":id" element={<EditAssistant/>} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </>
  );
};

export default MenuContent;
