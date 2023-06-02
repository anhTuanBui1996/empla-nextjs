import Airtable from "airtable";

let { baseId, apiKey } = process.env;

export const airtable = Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey,
});

export const base = Airtable.base(baseId || "");
