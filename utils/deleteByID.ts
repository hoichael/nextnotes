import type { Dispatch, SetStateAction } from "react"

const deleteByID = function(ID:number, setStorage:Dispatch<SetStateAction<{}[]>>):void {

    function checkID(element:any) {
        return element.id !== ID;
    }

    let storage = JSON.parse(localStorage.getItem("notes")!);
    let storageNew = storage.filter(checkID)

    localStorage.setItem("notes", JSON.stringify(storageNew));
    setStorage(JSON.parse(localStorage.getItem("notes")!));
}



export default deleteByID