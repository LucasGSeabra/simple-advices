import { Advice } from "../Advice";

type Search = {
  slips: Advice[];
  query: string;
  total_results: number;
};

export { Search };
