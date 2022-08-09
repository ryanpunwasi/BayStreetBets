import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import './stylesheet/App.scss';

import HomePage from './components/HomePage';
import Dashboard from './components/dashboard-core/DashboardMain';

function App() {

  const [state, setState] = useState({
    user: null,
    transactions: [],
    competitions: [],
    user_competitions_created: [],
    user_competitions_enrolled: [],
  });

  const userFromLocalStorage = localStorage.getItem("user");
  console.log(userFromLocalStorage)
  const navigate = useNavigate();

  useEffect(() => {
    if (userFromLocalStorage) {
      Promise.all([
        axios.get("/api/competitions"),
        axios.get(`/api/user/${userFromLocalStorage}/competitions`)
      ]).then((competitions) => {
        // console.log(competitions[1].data.competitionsCreated)
        // console.log(competitions[1].data)

        setState(prev => ({
          ...prev,
          user: parseInt(userFromLocalStorage),
          competitions: competitions[0].data,
          user_competitions_created: competitions[1].data.competitionsCreated,
          user_competitions_enrolled: competitions[1].data.competitionsEnrolled
        }));
      });
    }
  }, []);

  const pageRender = userFromLocalStorage ?
    <Dashboard 
      competitions={state.competitions} 
      user_competitions_created={state.user_competitions_created}
      user_competitions_enrolled={state.user_competitions_enrolled}
      user={state.user}
    />
    :
    <HomePage />

  return (
    <div className="App">
      {pageRender}
    </div>
  );
}

export default App;
