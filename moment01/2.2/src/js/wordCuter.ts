
export function cuter(string: any): string {
    return [...string.matchAll(/\b\w{1,2}/g)].join('.')
}