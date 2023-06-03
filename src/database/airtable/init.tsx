import Airtable from "airtable";

let baseId = process.env.airTable_baseId;
let apiKey = process.env.airTable_apiKey;

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey,
});

export default airtable.base(baseId || "");
