import type { FC } from "react";
import Header from 'Layouts/Header/Header'
import Footer from 'Layouts/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Agents from "../Agents";

const App: FC = () => {
  return (
    <div className="app">
      <Header title="Agents App" />
      <Agents />
      <Footer title="Agents App Footer" />
    </div>
  );
};

export default App;
