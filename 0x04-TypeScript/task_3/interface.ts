// interface.ts

// Define RowID type
type RowID = number;

// Define RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Export the type and interface
export { RowID, RowElement };
