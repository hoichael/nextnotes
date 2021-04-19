function SetLocalStorage(key:string , element:object) {

    let arr: object[] = [];

    if(localStorage.getItem(key)) {
        arr = JSON.parse(localStorage.getItem(key)!);
    }

    arr.push(element);
    localStorage.setItem(key, JSON.stringify(arr));
}

export default SetLocalStorage