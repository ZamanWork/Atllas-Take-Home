import { IReview } from "./Review";
export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicense: string;
  address: string;
  practiceAreas: string[];
  aboutMe: string;
  Reviews?: IReview[];
}

export interface FormValues {
  firstName: string,
  lastName: string,
  agentLicense: string,
  address: string,
  practiceAreas: string[],
  aboutMe: string,
  pictureUrl?: string,
}

export interface AgentFormProps {
  agent: IAgent;
}