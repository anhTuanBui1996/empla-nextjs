import { base, airtable } from "./init";
function table(tableName: string) {
  return base(tableName);
}

type UpdateObject = {
  id: string;
  fields: object;
};

export function getRecordByRecordId(tableName: string, recordId: string) {
  return table(tableName).find(recordId);
}

export function getAllRecords(tableName: string) {
  return table(tableName).select();
}

export function getRecordsWhere(tableName: string, expression: string) {
  return table(tableName).select({ filterByFormula: expression });
}

export function addRecord(tableName: string, object: object) {
  return table(tableName).create(object);
}

export function addRecords(tableName: string, objectArray: object[]) {
  return table(tableName).create(objectArray);
}

export function removeRecordByRecordId(tableName: string, recordId: string) {
  return table(tableName).destroy(recordId);
}

export function removeRecords(tableName: string, recordIdArray: string[]) {
  return table(tableName).destroy(recordIdArray);
}

export function updateRecordById(
  tableName: string,
  recordId: string,
  newUpdatedObject: object
) {
  return table(tableName).update(recordId, newUpdatedObject);
}

export function updateRecord(
  tableName: string,
  newUpdatedObjectArray: UpdateObject[]
) {
  return table(tableName).update(newUpdatedObjectArray);
}
