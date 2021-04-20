import noteINT from "../interfaces/noteINT"

const deleteByID = function(ID:number, setStorage: (notes: noteINT[]) => void):void {

    function checkID(element:any) {
        return element.id !== ID;
    }

    let storage = JSON.parse(localStorage.getItem("notes")!);
    let storageNew = storage.filter(checkID)

    localStorage.setItem("notes", JSON.stringify(storageNew));
    setStorage(JSON.parse(localStorage.getItem("notes")!));
}



export default deleteByID
