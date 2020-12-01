//localstorage中的键值对总以字符串形式存在
let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0; 

function createId(){
  id++;
  window.localStorage.setItem('_idMax', id.toString())
  return id;
}

export default createId;