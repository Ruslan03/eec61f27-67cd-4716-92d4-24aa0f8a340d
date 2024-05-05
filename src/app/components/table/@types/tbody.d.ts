export type ColumnType<D> = {
  headerTitle: string;
  render: (_: D) => React.ReactNode;
  fieldName: string;
};

export interface ITableColumn<D> {
  columns: ColumnType<D>[];
  list?: D[];
  rowKey: string;
}
