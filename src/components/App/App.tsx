import type { FC } from "react";
import { Provider } from "react-redux";
import Header from 'Layouts/Header/Header'
import Footer from 'Layouts/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Agents from "../Agents";
import store from "store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header title="Agents App" />
        <Agents />
        <Footer title="Agents App Footer" />
      </div>
    </Provider>
  );
};

export default App;
