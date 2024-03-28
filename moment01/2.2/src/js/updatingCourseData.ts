
import { showCourses } from './showCourses';
import { courseStorage } from './courseStorage';




export function updatingCourseData(index: number): void {
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
