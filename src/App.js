import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';
import Message from './pages/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Redux/Auth/auth.action';

function App() {
  const {auth} = useSelector(store => store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getProfileAction(jwt));
  }, [jwt]);
  return (
    <Router>
      <Routes>
        <Route path="/*" element={auth.user?<HomePage/> : <Authentication/>} />
        <Route path="/message" element={<Message />} />
        {/* Các route khác */}
      </Routes>
    </Router>
  );
}

export default App;
