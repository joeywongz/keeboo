const localStorageKeyName = 'recordList'
const recordListModel = {
    clone(data: RecordIterm[] | RecordIterm){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordIterm[];   //断言为RecordIterm类型
    },
    save(data: RecordIterm[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
    }
}

export default recordListModel