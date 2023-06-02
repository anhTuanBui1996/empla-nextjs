/**
 * Option list of single/multiple select column type, get from table metadata
 */
export default class ForeignOptions {
  public readonly tableName!: string;
  public readonly columnName!: string;
  public readonly options!: string[];

  constructor(tableName: string, columnName: string) {
    this.tableName = tableName;
    this.columnName = columnName;
  }
}
