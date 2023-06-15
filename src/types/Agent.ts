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
  Reviews: IReview[];
}