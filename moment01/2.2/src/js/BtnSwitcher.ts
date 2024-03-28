import { disabledSwitcher } from './disabledSwitcher';
import { updatingCourseData } from './updatingCourseData';





export function BtnSwitcher(): void {
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
