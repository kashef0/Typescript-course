
export function disabledSwitcher(index: number): void {
    
    const courseIdInput = <HTMLInputElement>document.getElementById(`Course_ID_${index}`);
    const courseNameInput = <HTMLInputElement>document.getElementById(`Course_Name_${index}`);
    const progressionSelect = <HTMLSelectElement>document.getElementById(`Progression_${index}`);
    const urlInput = <HTMLInputElement>document.getElementById(`urlInput_${index}`);

    courseIdInput.disabled = false;
    courseNameInput.disabled = false;
    progressionSelect.disabled = false;
    urlInput.disabled = false;

    sortsItems[index].disabled = false;
    
    return;
}