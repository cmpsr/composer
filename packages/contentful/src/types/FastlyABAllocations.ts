export interface FastlyABAllocations {
  vId: string;
  vName: string;
  experiments: {
    eId: string;
    vId: string;
    vName: string;
    vType: string;
  }[];
}
