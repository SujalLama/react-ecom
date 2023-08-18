export const strToCapitalize = (str:string) => {
    return str[0].toUpperCase() + str.slice(1); 
}

export const strRemoveDash = (str : string) => {
    return str.split("-").join(" ");
}
