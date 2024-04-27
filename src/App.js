import { BrowserRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from "./context/authContext";
import MyAdmin from './admin/Admin'
import PgApp from './common/PgApp';
import ClientApp from './client/MainClient';


const App = () => {
  const { currentUser, isAdmin } = useContext(AuthContext);

  console.log("app isAdmin  " + isAdmin );
  const Layout = ({ children }) => (
    <div className="">
      <div >
        {children}
      </div>
    </div>
  );

  const renderComponent = () => {
    if (!currentUser) {
      return <PgApp />;
    } else if (isAdmin) { 
      return <Layout><MyAdmin /></Layout>;
    } else {
      return <Layout><ClientApp /></Layout>;
    }
  };
  
  return (
    <BrowserRouter>
      {renderComponent()}
    </BrowserRouter>
  );
};

export default App;