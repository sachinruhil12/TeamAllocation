import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';
import Employee from './Component/Employee';
import GroupTeamMember from './Component/GroupTeamMember';
import Nav from './Component/Nav';
import NotFound from "./Component/NotFound";
function App() {
  // here we are setting hardcore value in  if the select team is not there
  const [selectTeam, setSelectTeam] = useState(JSON.parse(localStorage.getItem('select team')) || 'TeamB')

  const { employees, setEmployees } = useState(useState(JSON.parseInt(localStorage.getItem('employeealis')) || [
    {
      id: 1,
      fullName: "A",
      designation: "JS Developer",
      gender: 'male',
      teamName: "TeamA"

    },
    {
      id: 2,
      fullName: "B",
      designation: "JS Developer",
      gender: 'female',
      teamName: "TeamB"

    },
    {
      id: 3,
      fullName: "c",
      designation: "JS Developer",
      gender: 'male',
      teamName: "TeamA"

    },
    {
      id: 3,
      fullName: "d",
      designation: "JS Developer",
      gender: 'female',
      teamName: "TeamB"

    },
    {
      id: 4,
      fullName: "E",
      designation: "JS Developer",
      gender: 'male',
      teamName: "TeamA"

    },
    {
      id: 5,
      fullName: "F",
      designation: "JS Developer",
      gender: 'Female',
      teamName: "TeamB"

    },
    {
      id: 6,
      fullName: "G",
      designation: "JS Developer",
      gender: 'Female',
      teamName: "TeamA"

    },
    {
      id: 7,
      fullName: "H",
      designation: "JS Developer",
      gender: 'male',
      teamName: "TeamA"

    },
    {
      id: 8,
      fullName: "j",
      designation: "JS Developer",
      gender: 'male',
      teamName: "TeamA"

    },
    {
      id: 9,
      fullName: "k",
      designation: "JS Developer",
      gender: 'female',
      teamName: "TeamB"

    },
  ]);
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('changing select Team', JSON.stringify(selectTeam))
  }, [selectTeam])


  const handleTeamSelectionChange = (e) => {
    console.log(e.target.value)
    setSelectTeam(e.target.value);
  }

  const handleEmpCard = (event) => {

    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? employee.teamName === selectTeam ? { ...employee, teamName: '' }
        : { ...employee, teamName: selectTeam } : employee);
    setEmployees(transformedEmployees);
  }
  return (
    <Router>
      <Nav />
      <div className="App">
        <Header selectTeam={selectTeam}
          teamMemberCount={employees.filter((empp) => empp.teamName === selectTeam).length}
        />
        <Routes>
          <Route path="/"
            element={<Employee employees={employees}
              selectTeam={selectTeam}
              handleEmpCard={handleEmpCard}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />}>
            {/* //   <Employee employees={employees} */}
            {/* //   selectTeam={selectTeam} */}
            {/* //   handleEmpCard={handleEmpCard} */}
            {/* //   handleTeamSelectionChange={handleTeamSelectionChange} */}
            {/* // /> */}
          </Route>
          <Route path="/GroupTeamMember" element={
            <GroupTeamMember employees={employees}
              selectTeam={selectTeam}
              setTeam={setTeam}
            />
          }>
          </Route>
          <Route path="*" element={<NotFound />}>

          </Route>
        </Routes >
        <Footer />
        {/* <Content /> */}
      </div>
    </Router>
  );
}

export default App;
