import { format } from "date-fns/format";

export const formatDate = (date: number) => {
  if (!date) return;

  return format(date, "EEE, dd LLL");
};
