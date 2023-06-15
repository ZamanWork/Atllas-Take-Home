import { IAgent } from "types/Agent";
import { get, post, patch, Delete } from "../axios";

export function createAgentApi(body: IAgent) {
  return post(`${process.env.REACT_APP_BASE_URL}/create-agent`, body);
}
