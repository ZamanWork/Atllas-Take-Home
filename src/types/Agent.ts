import { Dispatch, SetStateAction } from "react";
import { IReview } from "./Review";
export interface IAgent {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  agentLicense: string;
  address: string;
  practiceAreas?: string[];
  aboutMe: string;
  Reviews?: IReview[];
}

export interface FormValues {
  firstName: string;
  lastName: string;
  agentLicense: string;
  address: string;
  practiceAreas?: string[];
  aboutMe: string;
  pictureUrl?: string;
}

export interface AgentProps {
  agent: IAgent;
}

export interface AgentListProps {
  agents: IAgent[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface AgentState {
  agent: IAgent;
  agents: IAgent[];
  error: object;
  type: any;
  totalPageCount: number;
  limit: number;
}