export interface DataItemJson {
    content:string;
    path:string;
    val:number|number[];
    multi?:boolean;
    config?:boolean;
    switch?:boolean;
    area?:boolean;
    selected?:boolean;
    customval?:number;
} 
export interface DataGroupJson {
    yi:DataItemJson[];
    yu:DataItemJson[];
    xing:DataItemJson[];
}
export class DataListJson {
    gong:DataGroupJson;
    guo:DataGroupJson;
}