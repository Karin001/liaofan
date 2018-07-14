export interface DataItemJson {
  content: string;
  path: string;
  val: number | number[];
  multi?: boolean;
  config?: boolean;
  switch?: boolean;
  area?: boolean;
  selected?: boolean;
  customval?: number;
  id: string;
}
export interface DataGroupJson {
  yi: DataItemJson[];
  yu: DataItemJson[];
  xing: DataItemJson[];
}

export class DataListJson {
  gong: DataGroupJson;
  guo: DataGroupJson;
}
export interface DateLogDetail {
  val: number;
  list: string[];
}
export interface DateLog {
  date: string;
  gong: DateLogDetail;
  guo: DateLogDetail;
}
export class DateJson {
  data: DateLog[];
}
