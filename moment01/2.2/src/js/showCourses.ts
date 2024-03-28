
import { BtnSwitcher } from './BtnSwitcher';
import { cuter } from "./wordCuter";




export function showCourses(): void {
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
                            <td><input type="url" id="urlInput_${index}" value="${kurs.kursUrl}" disabled></td>
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
