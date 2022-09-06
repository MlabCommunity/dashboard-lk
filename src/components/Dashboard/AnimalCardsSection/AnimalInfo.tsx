export function AnimalInfo(length: number) {
  const createRowData = (rowIndex: number) => {
    const name = "Puszek";
    const createdAt = "2022";
    const gender = "Male";
    const weight = 6;
    const isSterilized = true;
    const type = "Kot";
    const catColor = "Czerwony";

    return {
      id: rowIndex + 1,
      name,
      createdAt,
      gender,
      weight,
      isSterilized,
      type,
      catColor,
    };
  };

  return Array.from({ length }).map((_, index) => createRowData(index));
}

export function mockData(options: any) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data: [] = [];
  const mock = (list: any, parentValue: number = 1, layer: number = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value: any = parentValue
        ? // eslint-disable-next-line prefer-template
          parentValue + "-" + (index + 1)
        : // eslint-disable-next-line prefer-template
          index + 1 + "";
      const children: [] = [];

      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row = {
        label:
          typeof label === "function"
            ? label(layer, value)
            : `${label} ${value}`,
        value,
        children,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value),
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}
