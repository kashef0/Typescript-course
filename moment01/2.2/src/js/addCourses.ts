
import { showCourses } from './showCourses';
import { courseStorage } from './courseStorage';


export function addCourses(event: Event): void {
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

