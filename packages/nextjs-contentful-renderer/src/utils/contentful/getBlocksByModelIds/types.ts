export interface Block {
  sys: {
    id: string;
  };
}

export interface Model {
  sys: {
    id: string;
  };
  linkedFrom: {
    blockCollection: {
      items: Block[];
    };
  };
}
