import { FormBuilder, FormGroup } from "@angular/forms";

export class LavoroPageForm{
    private formBuilder : FormBuilder;
    private form: FormGroup;
    constructor (formBuilder : FormBuilder){
        this.formBuilder = formBuilder;
        this.form= this.createForm();
    }

    private createForm(): FormGroup{
        let form = this.formBuilder.group({
            Produzione : [''],
            Camera : [''],
            Azienda : [''],
            Regista: [''],
            Classe: [''],
            Note: ['']
        });
        return form;
    }
    getForm() : FormGroup{
        return this.form;
    }
   
}