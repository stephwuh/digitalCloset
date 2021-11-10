import React from 'react';

const Logout = () => {
  return (
    <button
      className="logout-button"
      onClick={() => {
        sessionStorage.removeItem('userId');
        window.location.reload();
      }}
    >
      Logout
    </button>
  );
};

export default Logout;



