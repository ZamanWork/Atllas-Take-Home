import { createAgentApi } from "store/api/agents";
import { 
  CREATE_AGENT_FAILURE, 
  CREATE_AGENT_SUCCESS 
} from "store/constants/agentConstants";
import { SUCCESSFUL } from "store/constants/statusCodes";

import { IAgent } from 'types/Agent';

const success = (agent: IAgent) => ({
  type: CREATE_AGENT_SUCCESS,
  agent,
});

const failure = (error: any) => ({
  type: CREATE_AGENT_FAILURE,
  error,
});

export const createAgent = (agent: any) => (dispatch: any) => {
  createAgentApi(agent)
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      dispatch(success(response.data.agent));
    } else {
      dispatch(failure(response));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  })
};



