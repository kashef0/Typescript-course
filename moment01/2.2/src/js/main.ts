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
    editCourses()

    sortsItems[index].disabled = false;
}

function updatingCourseData(index: number): void {
    
    const updatedId: string = (<HTMLInputElement>document.getElementById(`Course_ID_${index}`)).value;
    const updatedName: string = (<HTMLInputElement>document.getElementById(`Course_Name_${index}`)).value;
    // console.log('Watch -> updatedId:', updatedId);
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
        disabled: true
    };

    sortsItems.push(newCourse);

    courseStorage(sortsItems);

    inputId.value = '';
    inputName.value = '';
    inputProgression.value = '';
    inputUrl.value = '';

    (document.getElementById("message") as HTMLElement).innerHTML = 'Kursen har lagts till!';

}
function editCourses(): void {
    const list = <HTMLDivElement>document.getElementById("kurs_info");
    list.innerHTML = sortsItems.map((kurs, index: number) => {
            return `
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Kurscode</th>
                            <th scope="col">Kursnamn</th>
                            <th scope="col" style="width:10%">Progression</th>
                            <th scope="col">Webbsida</th>
                            <th scope="col">Handling</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_${index}">
                            <td><input type="text" id="Course_ID_${index}" value="${kurs.id.toLocaleUpperCase()}"  style="font-weight: 700; color: #a50000d4"></td>
                            <td><input type="text" id="Course_Name_${index}" value="${kurs.kursNamn}" ></td>
                            <td>
                                <select id="Progression_${index}" >
                                    <option value="A" ${kurs.progression === 'A' ? 'selected' : ''}>A</option>
                                    <option value="B" ${kurs.progression === 'B' ? 'selected' : ''}>B</option>
                                    <option value="C" ${kurs.progression === 'C' ? 'selected' : ''}>C</option>
                                </select>
                            </td>
                            <td><input type="text" id="urlInput_${index}" value="${kurs.kursUrl}" ></td>
                            <td><button class="updateBtnEdit" id="updateButton_${index}_edit" value="ändra">Uppdatera</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
    }).join("");
}


function showCourses(): void {
    const list = <HTMLDivElement>document.getElementById("kurs_info");
    list.innerHTML = sortsItems.map((kurs, index: number) => {
        if (kurs.disabled ===  true) 
            {
            return `
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Kurscode</th>
                            <th scope="col">Kursnamn</th>
                            <th scope="col" style="width:10%">Progression</th>
                            <th scope="col">Webbsida</th>
                            <th scope="col">Handling</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="row_${index}">
                            <td id="Course_ID_${index}" disabled>${kurs.id.toLocaleUpperCase()}</td>
                            <td id="Course_Name_${index}" disabled>${kurs.kursNamn.toLocaleUpperCase()}</td>
                            <td id="Progression_${index}" disabled>${kurs.progression}</td>
                            <td id="urlInput_${index}" disabled><a href="${kurs.kursUrl}">${cuter(kurs.kursNamn).toUpperCase()}</a></td>
                            <td><button class="updateBtnShow" id="updateButton_${index}_show" value="ändra">Ändra</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    }).join("");
}


function BtnSwitcher(): void {
        showCourses();
        let showButtons = document.querySelectorAll('.updateBtnShow') as NodeListOf<HTMLButtonElement>;
        // console.log('Watch -> showButtons:', showButtons);

        showButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent;
                // console.log('Watch -> buttonText:', buttonText);
    
                if (buttonText === "Ändra") {
                    disabledSwitcher(index);
                    button.textContent = "Uppdatera";

                    showButtons = document.querySelectorAll('.updateBtnEdit') as NodeListOf<HTMLButtonElement>;
                    showButtons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        const buttonText = button.textContent;
                        // console.log('Watch -> buttonText1111111111111111111111111111:', buttonText);
                            if (buttonText === "Uppdatera") {
                            // console.log("first1111111111111111111111")
                            updatingCourseData(index);
                            button.textContent = "Ändra";
                                window.location.reload();
            
                        }
                    });
                });
                } 
                if (buttonText === "Uppdatera") {
                    console.log("fdsfsdfsdf")
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
        BtnSwitcher();

    }
});


