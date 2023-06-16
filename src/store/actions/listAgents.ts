import { listAgentsApi } from "store/api/agents";
import { 
  LIST_AGENT_FAILURE, 
  LIST_AGENT_SUCCESS 
} from "store/constants/agentConstants";
import { SUCCESSFUL } from "store/constants/statusCodes";

import { IAgent } from 'types/Agent';

const success = (
  agents: IAgent[], 
  limit: number, 
  totalPageCount: number
  ) => ({
  type: LIST_AGENT_SUCCESS,
  agents,
  limit,
  totalPageCount
});

const failure = (error: any) => ({
  type: LIST_AGENT_FAILURE,
  error,
});

export const listAgents = (page: number) => (dispatch: any) => {
  listAgentsApi(page)
  .then((response) => {
    if (response.status === SUCCESSFUL) {
      const {data} = response;
      dispatch(success(data.agents, data.limit, data.totalPageCount));
    } else {
      dispatch(failure(response));
    }
  })
  .catch((err) => {
    dispatch(failure(err));
  })
};