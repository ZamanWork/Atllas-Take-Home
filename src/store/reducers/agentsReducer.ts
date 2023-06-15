import {
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_FAILURE
} from 'store/constants/agentConstants';

const initialState = {
  agent: {},
  isLoading: false,
};

export const agentsReducer = (state = initialState, action: { type: any; agent: any; error: any; }) => {
  switch (action.type) {
    case CREATE_AGENT_SUCCESS:
      return {
        ...state,
        agent: action.agent
      };

    case CREATE_AGENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
