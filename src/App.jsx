import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { useSelector } from "react-redux";
import { currentUserName } from "./slices/userSlice";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  const userName = useSelector(currentUserName);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              userName ? (
                <Suspense fallback={Loader}>
                  <Home />
                </Suspense>
              ) : (
                <Suspense fallback={Loader}>
                  <Login />
                </Suspense>
              )
            }
          />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
