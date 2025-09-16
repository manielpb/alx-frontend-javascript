/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface.js";
import * as CRUD from "./crud.js";

const row: RowElement = {
    firstName: "GuilLaume",
    lastName: "salva",
}

const newRowID: RowID = insertRow();

const updatedRow: RowElement = 23;

updateRow();
deleteRow();