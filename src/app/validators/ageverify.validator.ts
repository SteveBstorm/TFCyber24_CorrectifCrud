import { AbstractControl, ValidatorFn } from "@angular/forms";

export function AgeVerify(minAge : number) : ValidatorFn {
  return (control : AbstractControl) => {
    let birthYear : number = new Date(control.value).getFullYear()
    if(control.value == null) return null;
    if((new Date().getFullYear()) - minAge <= birthYear) return {ageMinError : "Vous avez moins de " + minAge + " ans"}
    return null;
  }
}
