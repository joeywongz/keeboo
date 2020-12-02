import createId from "@/lib/createId";
const localStorageKeyName = 'tagListModel';
const tagListModel: TagListModel = {
  data: [],
  create(name) {
    const id = createId();
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) > -1) {
      return 'duplicated'
    }
    this.data.push({ id: id.toString(), name: name })
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
  },
  remove(id: string) {
    let index = -1; //需要删除的tag的索引数
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();  //删除之后立即保存
    return true;
  }
}

export default tagListModel