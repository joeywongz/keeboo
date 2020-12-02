const localStorageKeyName = 'recordList'
const recordListModel = {
    data: [] as RecordIterm[],
    clone(data: RecordIterm[] | RecordIterm) {
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default recordListModel