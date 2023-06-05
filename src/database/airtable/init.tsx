import Airtable from "airtable";

let baseId = process.env.AIRTABLE_BASEID;
let apiKey = process.env.AIRTABLE_APIKEY;

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey,
});

export default airtable.base(baseId || "");
