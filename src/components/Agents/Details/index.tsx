import React from 'react';
import { IAgent } from 'types/Agent';

interface AgentInfoProps {
  agent: IAgent;
  title: string;
}

const AgentInfo: React.FC<AgentInfoProps> = ({ agent, title }) => {
  return (
    <div className='agent-info'>
      <h1>{title}</h1>
      <div className='card mb-4'>
        <div className='card-body text-center'>
          {agent.photoUrl && (
            <img
              src={agent.photoUrl}
              alt='avatar'
              className='rounded-circle img-fluid'
            />
          )}
          <h5 className='my-3'>
            {agent.firstName} {agent.lastName}
          </h5>
          <p className='text-muted mb-1'>{agent.agentLicense}</p>
          <p className='text-muted mb-4'>{agent.practiceAreas}</p>
          <p className='text-muted mb-4'>{agent.address}</p>
          <p className='text-muted mb-4'>{agent.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
