import { ESortOrder } from "../constants/enums";

export interface IPaginatedApiParamsBase {
  page: number;
  limit: number | string;
  query?: string;
  sortBy?: string;
  sort?: ESortOrder;
}

export type UseQueryType = {
  queryKey: readonly unknown[];
  queryFn: (args?: any) => Promise<any>;
};
