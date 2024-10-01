export interface Page {
  sys: {
    id: string;
  };
}

export interface Block {
  sys: {
    id: string;
  };
  linkedFrom: {
    pageCollection: {
      items: Page[];
    };
  };
}
