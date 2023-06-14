import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { IAgent } from 'types/Agent';
import axios from 'axios';
import './Agents.css';
import AgentList from './AgentsList/AgentList';
import AgentForm from './AgentsForm/AgentForm';


const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [showModal, setShowModal] = useState(false);


  const handleButtonClick = () => {
    setShowModal(true);
  };
  
  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get('/agents');
      setAgents(response.data.agents);
    }
    fetchInitialData();
  }, []);
  return (
    <div>
      {showModal && (
        <div className="modal show">
          <div className="modal-content">
            <AgentForm agent={agents[0]} />
            <button className="btn btn-danger closeButton" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      
      <h1>List of All Agents</h1>

      <div className="d-flex" style={{ width: 500 }}>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button className="btn btn-outline-primary" style={{ flex: 'right' }} type="submit" onClick={handleButtonClick}>
          Join The Team
        </button>
      </div>

      <AgentList agents={agents} />
    </div>
  );
};

export default Agents;
