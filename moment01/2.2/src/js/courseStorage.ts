
interface kurs {
    id: string;
    kursNamn: string;
    progression: string;
    kursUrl: string;
    disabled: boolean
}

export function localstorage(): any {
    let sortsItems: kurs[] = JSON.parse(localStorage.getItem("items") || "[]");
    return sortsItems;
}


export function courseStorage(sortsItems: kurs[]): void {
    localStorage.setItem("items", JSON.stringify(sortsItems));
}