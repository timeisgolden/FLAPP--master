import { Form, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { repeat } from "rxjs/operators";

export class RegisterPageForm{
    private formBuilder : FormBuilder;
    private form: FormGroup;
    constructor (formBuilder : FormBuilder){
        this.formBuilder = formBuilder;
        this.form= this.createForm();
    }
 private createForm(): FormGroup{
        let form = this.formBuilder.group({
            //nome : ['',[Validators.required]],
            //cognome : ['',[Validators.required]],
            email : ['',[Validators.required, Validators.email]],
            password : ['',[Validators.required, Validators.minLength(6)]],
            confermapassword : [''],
            //telefono : ['',[Validators.required]],
            /*indirizzo: this.formBuilder.group({
                nazione : ['',[Validators.required]],
                regione : ['',[Validators.required]],
                città : ['',[Validators.required]],
                provincia : ['',[Validators.required]],
                cap : ['',[Validators.required]],
                indirizzodicasa : ['',[Validators.required]],
                numero : ['',[Validators.required]]
            })*/
        });
        form.get('confermapassword').setValidators(matchPasswordAndRepeatPassword(form))
        return form;
    }
    getForm() : FormGroup{
        return this.form;
    }
   
}

function matchPasswordAndRepeatPassword(form: FormGroup): ValidatorFn{
    const password = form.get('password');
    const confermapassword= form.get('confermapassword');

    const validator = ()=>{
        return password.value == confermapassword.value ? null :{isntMatching: true}
    };
    return validator

}
