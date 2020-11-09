const localStorageKeyName = 'tagListModel'
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
}

const tagListModel: TagListModel = {
  data: [],
  create(name) {
    if(this.data.indexOf(name) > -1) {
      return 'duplicated'
    }
    this.data.push(name)
    this.save()
    return 'success'
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default tagListModel