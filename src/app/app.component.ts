import { Component } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
 
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.formLogin=this.formBuilder.group( {
      email: [' ' ,
        [ Validators.required ,
          Validators.email
        ]
      ],
      password:['',
        [
         Validators.required ,
         Validators.minLength(6)
        ]
      ],
      terms: ['',
        [
          Validators.required , 
          Validators.requiredTrue
        ]
      ]
    
    });

    this.loadAPI
  }

  loadAPI():any {
    const response= {
      email: 'prueba@gmail.com' ,
      password: '1234567', 
      terms:true
    };

    this.formLogin.patchValue(response);

  }

  send():any {
    console.log(this.formLogin.value);
  }
}
