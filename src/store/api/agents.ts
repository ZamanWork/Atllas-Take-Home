import { IAgent } from "types/Agent";
import { get, post, patch, Delete } from "../axios";

const endpointURL = process.env.REACT_APP_BASE_URL;

export function createAgentApi(body: IAgent) {
  return post(`${endpointURL}/create-agent`, body);
}

export function listAgentsApi(page: number) {
  return get(`${endpointURL}/agents?page=${page}`);
}
