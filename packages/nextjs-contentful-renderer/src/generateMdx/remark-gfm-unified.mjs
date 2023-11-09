import remarkGfm from "remark-gfm";

export const processor = unified().use(remarkGfm);
