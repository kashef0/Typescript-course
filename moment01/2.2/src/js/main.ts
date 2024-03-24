
interface kurs {
    id: string;
    kursNamn: string;
    progression: string;
    kursUrl: string;
}



let sortsItems: kurs[] = JSON.parse(localStorage.getItem("items") || "[]");


let list = <HTMLElement> document.getElementById("kurs_info");
list.innerHTML = sortsItems.map(kurs => `<table>
<thead>
    <tr>
    <th scope="col">Kurscode</th>
    <th scope="col">Kursnamn</th>
    <th scope="col" style="width:10%">Progression</th>
    <th scope="col">Webbsida</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td scope="row" style="font-weight: 700; color: #a50000d4">${(kurs.id).toLocaleUpperCase()}</th>
    <td>${kurs.kursNamn.charAt(0).toLocaleUpperCase() + kurs.kursNamn.slice(1)}</td>
    <td>${kurs.progression}</td>
    <td><a href="${kurs.kursUrl}">${kurs.kursNamn.substring(0,4)}</a></td>
    </tr>
</tbody>
</table>`).join("");

let inputId = <HTMLInputElement> document.getElementById("Course_ID");
let inputName = <HTMLInputElement> document.getElementById("Course_Name");
let inputprogression = <HTMLInputElement> document.getElementById("Progression");
let inputUrl = <HTMLInputElement> document.getElementById("urlInput");

let addBtn = <HTMLButtonElement> document.getElementById("addBtn");


addBtn.addEventListener('click', addCourses);

function addCourses(): void {
    let id: string = inputId.value;
    let namn: string = inputName.value;
    let progression: string = inputprogression.value.toLocaleUpperCase();
    let url: string = inputUrl.value;
    
    if (!id || !namn || !progression || !url) {
        event?.preventDefault();
        if (!id) {
            inputId.style.borderColor = 'red';
        } else {
            inputId.style.borderColor = '';
        }
        if (!namn) {
            inputName.style.borderColor = 'red';
        } else {
            inputName.style.borderColor = '';
        }
        if (!progression) {
            inputprogression.style.borderColor = 'red';
        } else {
            inputprogression.style.borderColor = '';
        }
        if (!url) {
            inputUrl.style.borderColor = 'red';
        } else {
            inputUrl.style.borderColor = '';
        }
        (document.getElementById("message") as HTMLElement).innerHTML = 'Vänligen fylla på alla fälten';
    } else {
        inputId.style.borderColor = '';
        inputName.style.borderColor = '';
        inputprogression.style.borderColor = '';
        inputUrl.style.borderColor = '';
        (document.getElementById("message") as HTMLElement).innerHTML = '';
    }
    // if (progression.length > 2 || !['A','B','C'].includes(progression))  {
    //         (document.getElementById("message") as HTMLElement).innerHTML = "vänligen ange bara "A', 'B' eller 'C' ";
    //         // (document.querySelector('input[type="text"]') as HTMLInputElement).style.color = 'red';
    //         return;
    // }

    if (id && namn && progression && url) {
        let newAddkurs: kurs = {
            id: id,
            kursNamn: namn,
            progression: progression,
            kursUrl: url
        };

        sortsItems.push(newAddkurs);
        courseStorage(sortsItems);

        return;
    }
    
    return;
}


function courseStorage(sortsItems: kurs[]): any {
    localStorage.setItem("items", JSON.stringify(sortsItems));
}

let remover = <HTMLButtonElement> document.getElementById("clearbutton");
remover.addEventListener('click', clearItems);

function clearItems(): void {
    sortsItems.length = 0;
    list.innerHTML = "";
    localStorage.clear();
}
