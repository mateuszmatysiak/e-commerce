export const getQueryAsString = (query: string | string[] | undefined) => {
  if (typeof query !== "string") throw new Error(`Query type is not correct: ${query}`);

  return query;
};
