import React from "react";
import { Provider } from "react-redux";

import Test from "./pages";
// import { Header } from './containers'

import { setupStore } from "./redux/store";

import "./App.css";

const App: React.FC = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      {/* <Header /> */}
      <div className="App">
        <Test />
      </div>
    </Provider>
  );
};

export default App;
