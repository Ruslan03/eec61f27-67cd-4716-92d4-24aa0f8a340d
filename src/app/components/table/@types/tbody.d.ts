type InputRule = {
  required?: boolean;
  pattern?: RegExp;
};

export type ColumnType<D> = {
  headerTitle: string;
  render: (_: D) => React.ReactNode;
  fieldName: string;
  rule?: InputRule;
};

export interface ITableColumn<D> {
  columns: ColumnType<D>[];
  list?: D[];
  rowKey: string;
}
