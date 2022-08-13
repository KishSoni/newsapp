import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  const pageSize = 100;
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;