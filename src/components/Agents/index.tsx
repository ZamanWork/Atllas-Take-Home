import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { IAgent } from 'types/Agent';
import axios from 'axios';
import AgentList from 'components/Agents/List';
import AgentForm from 'components/Agents/Form';
import Button from 'components/Shared/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Modal from 'components/Shared/Modal';

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
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <AgentForm agent={agents[0]} />
        </Modal>
      )}

      <div className='heading'>
        <h1>List of All Agents</h1>
      </div>

      <div className='d-flex searchBar'>
        <form className='d-flex'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>

        <Button className='btn btn-primary joinButton' buttonText='Join The Team' icon={<PersonAddAlt1Icon/>} onClick={handleButtonClick}/>
      </div>

      <AgentList agents={agents} />
    </div>
  );
};

export default Agents;
