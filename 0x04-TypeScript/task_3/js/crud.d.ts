import RowID from interface.ts;
import RowElement from interface.ts;

declare function insertRow(row: RowElement): number
declare function deleteRow(rowId: RowID): void
declare function updateRow()