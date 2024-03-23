import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import UserList from './components/UserList';
import UserDetails from './components/UserDetalis';
import useUserData from './components/CustomHooks/useUserData'

const App = () => {
  const { users, loading, error } = useUserData();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = user => {
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<UserList users={users} loading={loading} error={error} onUserClick={handleUserClick} />} /> 
          <Route path="/user-details/:userId" element={<UserDetails users={users} selectedUser={selectedUser} onBack={handleBackToList} />} /> 
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
