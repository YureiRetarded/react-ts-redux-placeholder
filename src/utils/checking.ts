export function checkInputId(id:any){
    switch (typeof id) {
        case 'number':
            return id
        case 'string':
            const parsed = parseInt(id)
            if (isNaN(parsed))
                return "incorrect"
            else return parsed
        default :
            return "incorrect"
    }
}