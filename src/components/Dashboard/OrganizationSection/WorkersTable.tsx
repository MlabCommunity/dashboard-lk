import * as React from "react";
import styled from "styled-components";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = styled("table")`
  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  width: 100%;
  .header {
    border-top: 1px solid #e5e9eb;
    border-bottom: 1px solid #e5e9eb;
  }
`;
const TableRow = styled("tr")`
  display: flex;
  justify-content: space-evenly;
  text-align: left;
`;
const Title = styled("tr")`
  th {
    padding: 1.2rem 1.6rem;
    ${({ theme }) => theme.text16Semi};
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    text-align: left;
  }
`;
const TBody = styled("tbody")`
  tr:nth-child(even) {
    background: ${({ theme }) => theme.colorsGray.lightGray5};
  }
`;
const HeadTh = styled("th")`
  padding: 1.1rem 1.6rem;
  flex: 3;
  ${({ theme }) => theme.text13Medium};
  color: ${({ theme }) => theme.colorsGray.midGray2};
  &:last-child {
    flex: 1;
    text-align: center;
  }
`;
const BodyTd = styled("td")`
  padding: 1.6rem;
  flex: 3;
  ${({ theme }) => theme.text14Regular};
  color: ${({ theme }) => theme.colorsBlackandWhite.black};
  &:last-child {
    flex: 1;
    text-align: center;
  }
`;

type Person = {
  firstName: string;
  // lastName: string;
  email: string;
  addDate: string;
  action: string;
};

const defaultData: Person[] = [
  {
    firstName: "Marian Paździoch",
    // lastName: "Paździoch",
    email: "marian@gmail.com",
    addDate: "06.02.21",
    action: "XADSSAD",
  },
  {
    firstName: "Marianaaa Paździochowaaaaa",
    // lastName: "Paździochowaaaaa",
    email: "Paździoch@gmail.com",
    addDate: "22.11.21",
    action: "X",
  },
  {
    firstName: "Jan Zimny",
    // lastName: "Zimny",
    email: "marianowicz@gmail.com",
    addDate: "22.09.21",
    action: "X",
  },
  {
    firstName: "Jan Zimny",
    // lastName: "Zimny",
    email: "marianowicz@gmail.com",
    addDate: "22.09.21",
    action: "X",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: () => "Imię i nazwisko",
    footer: (info) => info.column.id,
  }),
  // columnHelper.accessor("lastName", {
  //   cell: (info) => info.getValue(),
  //   footer: (info) => info.column.id,
  // }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: () => "E-mail",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("addDate", {
    cell: (info) => info.getValue(),
    header: () => "Data dodania",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    header: () => "Akcja",
    footer: (info) => info.column.id,
  }),
];

export const WorkersTable = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <Table>
        <thead>
          <Title>
            <th>Lista pracowników</th>
          </Title>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="header">
              {headerGroup.headers.map((header) => (
                <HeadTh key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </HeadTh>
              ))}
            </TableRow>
          ))}
        </thead>
        <TBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <BodyTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </BodyTd>
              ))}
            </TableRow>
          ))}
        </TBody>
        <tfoot
          style={{
            padding: "1rem 1.6rem",
            boxShadow: "inset 0px 1px 0px #E5E9EB",
          }}
        >
          <tr>FOOTER</tr>
        </tfoot>
      </Table>
    </div>
  );
};
