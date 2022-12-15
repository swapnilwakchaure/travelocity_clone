export const saveDataLocal = (key,data) =>{
    localStorage.setItem(key,JSON.stringify(data))
}
export const getDataLocal = (key) =>{
    try {
        let temp = JSON.parse(localStorage.getItem(key))
        return temp
    } catch (error) {
        return undefined
    }
}