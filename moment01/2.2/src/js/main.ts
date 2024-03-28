import { cuter } from "./wordCuter";
 
interface kurs {
    id: string;
    kursNamn: string;
    progression: string;
    kursUrl: string;
    disabled: boolean
}

let sortsItems: kurs[] = JSON.parse(localStorage.getItem("items") || "[]");

function disabledSwitcher(index: number): void {
    
    const courseIdInput = <HTMLInputElement>document.getElementById(`Course_ID_${index}`);
    const courseNameInput = <HTMLInputElement>document.getElementById(`Course_Name_${index}`);
    const progressionSelect = <HTMLSelectElement>document.getElementById(`Progression_${index}`);
    const urlInput = <HTMLInputElement>document.getElementById(`urlInput_${index}`);

    courseIdInput.disabled = false;
    courseNameInput.disabled = false;
    progressionSelect.disabled = false;
    urlInput.disabled = false;

    sortsItems[index].disabled = false;
    
}

function updatingCourseData(index: number): void {
    const updatedId: string = (<HTMLInputElement>document.getElementById(`Course_ID_${index}`)).value;
    const updatedName: string = (<HTMLInputElement>document.getElementById(`Course_Name_${index}`)).value;
    const updatedProgression: string = (<HTMLSelectElement>document.getElementById(`Progression_${index}`)).value;
    const updatedUrl: string = (<HTMLInputElement>document.getElementById(`urlInput_${index}`)).value;

    if (!updatedId || !updatedName || !updatedProgression || !updatedUrl) {
        return;
    }

    sortsItems[index].id = updatedId;
    sortsItems[index].kursNamn = updatedName;
    sortsItems[index].progression = updatedProgression;
    sortsItems[index].kursUrl = updatedUrl;

    sortsItems[index].disabled = true;
    

    courseStorage(sortsItems);
    
    showCourses();
    
}

function addCourses(event: Event): void {
    event.preventDefault();
    const inputId = (<HTMLInputElement>document.getElementById("Course_ID"));
    const inputName = (<HTMLInputElement>document.getElementById("Course_Name"));
    const inputProgression = (<HTMLSelectElement>document.getElementById("Progression"));
    const inputUrl = (<HTMLInputElement>document.getElementById("urlInput"));

    const id: string = inputId.value;
    const name: string = inputName.value;
    const progression: string = inputProgression.value;
    const url: string = inputUrl.value;

    if (!id || !name || !progression || !url) {
        return;
    }

    const CheckKurs = sortsItems.find(course => course.id === id);

    if (CheckKurs) {
        event.preventDefault();
        (document.getElementById("message") as HTMLElement).innerHTML = 'Det går inte att lägga till samma kod för två kurser';
        return;
    };
    const newCourse: kurs = {
        id: id,
        kursNamn: name,
        progression: progression,
        kursUrl: url,
        disabled: false
    };

    sortsItems.push(newCourse);

    courseStorage(sortsItems);

    inputId.value = '';
    inputName.value = '';
    inputProgression.value = '';
    inputUrl.value = '';

    (document.getElementById("message") as HTMLElement).innerHTML = 'Kursen har lagts till!';

    showCourses();
}



function showCourses(): void {
    const list = <HTMLDivElement>document.getElementById("kurs_info");
    list.innerHTML = sortsItems.map((kurs, index: number) => {
        if (kurs.disabled ===  false) {
            return `
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Kurscode</th>
                            <th scope="col">Kursnamn</th>
                            <th scope="col" style="width:10%">Progression</th>
                            <th scope="col">Webbsida</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_${index}">
                            <td><input type="text" id="Course_ID_${index}" value="${kurs.id.toLocaleUpperCase()}" disabled style="font-weight: 700; color: #a50000d4"></td>
                            <td><input type="text" id="Course_Name_${index}" value="${kurs.kursNamn}" disabled></td>
                            <td>
                                <select id="Progression_${index}" disabled>
                                    <option value="A" ${kurs.progression === 'A' ? 'selected' : ''}>A</option>
                                    <option value="B" ${kurs.progression === 'B' ? 'selected' : ''}>B</option>
                                    <option value="C" ${kurs.progression === 'C' ? 'selected' : ''}>C</option>
                                </select>
                            </td>
                            <td><input type="text" id="urlInput_${index}" value="${kurs.kursUrl}" disabled></td>
                            <td><button class="updateBtn" id="updateButton_${index}" value="ändra">Ändra</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        } else {
            return `
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Kurscode</th>
                            <th scope="col">Kursnamn</th>
                            <th scope="col" style="width:10%">Progression</th>
                            <th scope="col">Webbsida</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_${index}">
                            <td id="Course_ID_${index}" disabled>${kurs.id.toLocaleUpperCase()}</td>
                            <td id="Course_Name_${index}" disabled>${kurs.kursNamn.toLocaleUpperCase()}</td>
                            <td id="Progression_${index}" disabled>${kurs.progression}</td>
                            <td id="urlInput_${index}" disabled><a href="${kurs.kursUrl}">${cuter(kurs.kursNamn).toUpperCase()}</a></td>
                            <td><button class="updateBtn" id="updateButton_${index}" value="ändra">Ändra</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    }).join("");
    BtnSwitcher();
}


function BtnSwitcher(): void {
    const updateButtons = document.querySelectorAll('.updateBtn') as NodeListOf<HTMLButtonElement>;

    updateButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === "Ändra") {
                disabledSwitcher(index);
                button.textContent = "Uppdatera";
                (button as HTMLButtonElement).dataset.status = "enabled";
            } else if (buttonText === "Uppdatera") {
                updatingCourseData(index);
                button.textContent = "Ändra";
                (button as HTMLButtonElement).dataset.status = "disabled";
            }
        });
    });
}




function courseStorage(sortsItems: kurs[]): void {
    localStorage.setItem("items", JSON.stringify(sortsItems));
}

function clearItems(): void {
    sortsItems = [];
    localStorage.clear();
    showCourses();
}

document.getElementById("addBtn")?.addEventListener('click', addCourses);
document.getElementById("clearbutton")?.addEventListener('click', clearItems);

document.addEventListener("DOMContentLoaded", function() {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
        sortsItems = JSON.parse(storedItems);
        showCourses();
    }
});


