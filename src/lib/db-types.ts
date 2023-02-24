// database types

export type List = {
  uid: string;
  name: string;
  items: ListItem[];
};

export type ListItem = {
  uid: string;
  fields: Field[];
  order?: number;
};

export type FieldValue = string | number | null;

export type Field = {
  uid: string;
  value: FieldValue;
  type: string;
};
