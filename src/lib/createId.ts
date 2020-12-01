let id: number = parseInt(window.localStorage.getItem('_idMAX') || '0') || 0;

function createId(){
  return ++id;
}

export default createId;