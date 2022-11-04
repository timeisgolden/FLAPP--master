import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form";

describe("RegisterPageForm", ()=>{

    let registerPageForm:RegisterPageForm; 
    let form : FormGroup;
beforeEach(()=>{
             registerPageForm = new RegisterPageForm(new FormBuilder());
             form = registerPageForm.getForm();
        
        })
 
        it("should empty email be invalid",()=>{
            
            expect(form.get("email").valid).toBeFalsy();
           
        })
        it("should empty password be invalid",()=>{
            
            expect(form.get("password").valid).toBeFalsy();
           
        })
        it("should empty confermapassword be invalid",()=>{
            
            expect(form.get("confermapassword").valid).toBeFalsy();
           
        })
        it("should empty phone be invalid",()=>{
            
            expect(form.get("telefono").valid).toBeFalsy();
           
        })
        it("should empty nation be invalid",()=>{
            
            expect(form.get('indirizzo').get("nazione").valid).toBeFalsy();
        

        it("should invalid email be invalid",()=>{
            form.get("email").setValue("invalid email");
            expect(form.get("email").valid).toBeFalsy();
           
        })
        it("should password less then 6 characters be invalid",()=>{
            form.get('password').setValue('12345');
            expect(form.get("password").valid).toBeFalsy();
           
        })
        it("should password password different from repeat password be invalid",()=>{
            form.get('password').setValue('anyPassword');
            form.get('confermapassword').setValue('anotherPassword');
            expect(form.get("confermapassword").valid).toBeFalsy();
           
        })
        it("should form be valid",()=>{
           
            form.get('email').setValue;("anyEmail");
            form.get('password').setValue;("anyPassword");
            form.get('confermapassword').setValue;("anyPassword");
            

            expect(form.valid).toBeTruthy();
           
        })
      
    })
})