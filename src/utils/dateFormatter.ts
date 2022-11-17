export function stringDateFormatter(date:Date):string{
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}