// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../event.service';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit {
//   registeruserdata: { email: string, password: string } = { email: '', password: '' };
//   registeruser(){
//     console.log(this.registeruserdata)
//   }
//   ngOnInit(): void {

//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata = {name:""};
  submit =false;
  constructor(private fb: FormBuilder) {
  }
                
  ngOnInit() {
  }

  onSubmit() {
    // Process form submission
  }
}
