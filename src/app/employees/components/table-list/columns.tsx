import { ColumnType } from "@/app/components/table/@types/tbody";
import { Employee } from "@/services/@types/employee";
import { emailRegex } from "@/utils/regex";

const columns: ColumnType<Employee>[] = [
  {
    headerTitle: "First Name",
    fieldName: "first_name",
    render: (rowData) => {
      return <p>{rowData.first_name}</p>;
    },
    rule: {
      required: true,
    },
  },
  {
    headerTitle: "Last Name",
    fieldName: "last_name",
    render: (rowData) => {
      return <p>{rowData.last_name}</p>;
    },
    rule: {
      required: true,
    },
  },
  {
    headerTitle: "Position",
    fieldName: "position",
    render: (rowData) => {
      return <p>{rowData.position}</p>;
    },
    rule: {
      required: true,
    },
  },
  {
    headerTitle: "Phone",
    fieldName: "phone",
    render: (rowData) => {
      return <p>{rowData.phone}</p>;
    },
    rule: {
      required: true,
    },
  },
  {
    headerTitle: "Email",
    fieldName: "email",
    render: (rowData) => {
      return <p>{rowData.email}</p>;
    },
    rule: {
      required: true,
      pattern: emailRegex,
    },
  },
];

export default columns;
