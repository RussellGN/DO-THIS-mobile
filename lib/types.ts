export type Todo = {
  id: string;
  content: string;
  date: string;
  done: boolean;
};

export type Filter = {
  query?: string;
  startDate?: Date;
  endDate?: Date;
  done?: boolean;
};

export type FilterKeys = "query" | "startDate" | "endDate" | "done";
