const localStorageKeyName = 'tagListModel';

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
}

const tagListModel: TagListModel = {
  data: [],
  create(name) {
    const names = this.data.map(item => item.name)
    if(names.indexOf(name) > -1) {
      return 'duplicated'
    }
    this.data.push({id: name, name: name})
    this.save()
    return 'success'
  },
  fetch() {
    return this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default tagListModel