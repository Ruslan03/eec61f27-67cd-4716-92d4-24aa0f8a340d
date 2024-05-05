import { ColumnType } from "@/app/components/table/@types/tbody";
import { Employee } from "@/services/@types/employee";

const columns: ColumnType<Employee>[] = [
  {
    headerTitle: "First Name",
    fieldName: "first_name",
    render: (rowData) => {
      return <p>{rowData.first_name}</p>;
    },
  },
  {
    headerTitle: "Last Name",
    fieldName: "last_name",
    render: (rowData) => {
      return <p>{rowData.last_name}</p>;
    },
  },
  {
    headerTitle: "Position",
    fieldName: "position",
    render: (rowData) => {
      return <p>{rowData.position}</p>;
    },
  },
  {
    headerTitle: "Phone",
    fieldName: "phone",
    render: (rowData) => {
      return <p>{rowData.phone}</p>;
    },
  },
  {
    headerTitle: "Email",
    fieldName: "email",
    render: (rowData) => {
      return <p>{rowData.email}</p>;
    },
  },
];

export default columns;
