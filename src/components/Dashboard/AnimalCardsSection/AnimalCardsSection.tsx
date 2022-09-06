import React from "react";
import SectionLayout from "shared/dashboard/SectionLayout";
import { Table, Pagination } from "rsuite";
import styled from "styled-components";
import { AnimalInfo } from "./AnimalInfo";

import "rsuite/dist/rsuite.min.css";

const Wrapper = styled(SectionLayout)`
  .rs-table {
    height: 400px;
  }
`;

const { Column, HeaderCell, Cell } = Table;
const animalData = AnimalInfo(7);

const AnimalCardsSection = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = animalData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <Wrapper>
      <Table
        height={500}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column align="center" fixed>
          <HeaderCell>Imię zwierzaka</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column fixed>
          <HeaderCell>Data dodania</HeaderCell>
          <Cell dataKey="createdAt" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Gatunek</HeaderCell>
          <Cell dataKey="type" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Płeć</HeaderCell>
          <Cell dataKey="gender" />
        </Column>
        <Column width={50} flexGrow={3}>
          <HeaderCell>Umaszczenie</HeaderCell>
          <Cell dataKey="catColor" />
        </Column>
        <Column width={50} flexGrow={1}>
          <HeaderCell>Waga</HeaderCell>
          <Cell dataKey="weight" />
        </Column>
        <Column width={50} flexGrow={1}>
          <HeaderCell>Sterylizacja</HeaderCell>
          <Cell dataKey="catColor" />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={animalData.length}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </Wrapper>
  );
};

export default AnimalCardsSection;
