import {FormGroup, FormControl, Validators} from '@angular/forms';
import {OnInit, Component} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';

@Component({selector: 'app-signup', templateUrl: './signup.component.html'})
export class SignupComponent implements OnInit {
  myForm : FormGroup;
  /**
 *
 */
  constructor(private authService: UserService) {}
  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password,
       this.myForm.value.name);
    this
      .authService
      .signup(user)
      .subscribe(data => console.log(data), error => console.error(error));
    // this
    //   .myForm
    //   .reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:' +
            '[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
}
