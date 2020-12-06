type RecordItem = {
  tags?: string[];
  formItem?: string;
  type?: string;
  amount: number;
  createdAt?: Date;
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
  remove: (id: string) => boolean;
}

interface Window {
  tagList: Tag[];
  createTag: (tagName: string) => void;
  removeTag: (id1: string) => boolean;
  updateTag: TagListModel['update'];
}