export type SortType = string | [string, "ASC" | "DESC"];

export type HeadType = {
  fieldName: string;
  headerTitle: string;
};

export interface ITHead {
  header: HeadType[];
  sort: SortType;
  onSortChange: (_: SortType) => void;
}
