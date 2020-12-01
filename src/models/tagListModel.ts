const localStorageKeyName = 'tagListModel';

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
}

const tagListModel: TagListModel = {
  data: [],
  create(name) {
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) > -1) {
      return 'duplicated'
    }
    this.data.push({ id: name, name: name })
    this.save()
    return 'success'
  },
  fetch() {
    return this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
  },
  update(id: string, name: string) {  //更新tag数据
    const idList = this.data.map(tag => tag.id);
    if (idList.indexOf(id) >= 0) {
      const nameList = this.data.map( tag => tag.name)
      if(nameList.indexOf(name) >= 0) {
        return 'duplicated';
      }else {
        const tag = this.data.filter( tag => tag.id === id)[0]
        tag.name = name
        this.save()
        return 'success';
      }
    } else {
      return 'not found';
    }

  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
  }
}

export default tagListModel