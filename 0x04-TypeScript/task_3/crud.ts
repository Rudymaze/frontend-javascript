import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID {
  // Implementation goes here
  // For now, just return a dummy RowID
  return Math.floor(Math.random() * 1000);
}

export function deleteRow(rowId: RowID): void {
  // Implementation goes here
  // For now, just leave it empty
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  // Implementation goes here
  // For now, just return the same rowId
  return rowId;
}
