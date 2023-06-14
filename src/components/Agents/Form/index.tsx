import React from 'react';
import { IAgent } from 'types/Agent';

interface AgentFormProps {
  agent: IAgent;
}

const Form: React.FC<AgentFormProps> = ({ agent }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Agent Form</h1>
      <form onSubmit={handleSubmit}>
        {agent.photoUrl && (
          <div className="mb-3">
            <img src={agent.photoUrl} alt="Profile" className="profile-image" />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" type="text" value={agent.firstName} disabled className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" type="text" value={agent.lastName} disabled className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="agentLicense" className="form-label">Agent License</label>
          <input id="agentLicense" name="agentLicense" type="text" value={agent.agentLicense} disabled className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input id="address" name="address" type="text" value={agent.address} disabled className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="practiceAreas" className="form-label">Practice Areas</label>
          <input id="practiceAreas" name="practiceAreas" type="text" value={agent.practiceAreas} disabled className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="aboutMe" className="form-label">About Me</label>
          <textarea id="aboutMe" name="aboutMe" value={agent.aboutMe} disabled className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary" disabled>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
