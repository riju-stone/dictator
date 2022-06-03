import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { useSelector } from "react-redux";
import { currentUserName } from "./slices/userSlice";
import { Suspense } from "react";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";
import Notes from "./pages/Notes";
import Kanban from "./pages/Kanban";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Journal from "./pages/Journal";

function App() {
  const userName = useSelector(currentUserName);

  return (
    <BrowserRouter>
      <div className="App">
        <Titlebar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              userName !== null ? (
                <div className="flex flex-row">
                  <Sidebar />
                  <Notes />
                </div>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/account"
            element={
              <div className="flex flex-row">
                <Sidebar />
                <Account />
              </div>
            }
          />
          <Route
            path="/kanban"
            element={
              <div className="flex flex-row">
                <Sidebar />
                <Kanban />
              </div>
            }
          />
          <Route
            path="/journal"
            element={
              <div className="flex flex-row">
                <Sidebar />
                <Journal />
              </div>
            }
          />
          <Route
            path="/calendar"
            element={
              <div className="flex flex-row">
                <Sidebar />
                <Calendar />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="flex flex-row">
                <Sidebar />
                <Settings />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
