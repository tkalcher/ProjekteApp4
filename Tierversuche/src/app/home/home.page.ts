import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: any[] = [];
  animalForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.animalForm = this.formBuilder.group({
    Animal: ['',
                Validators.compose(
                  [
                    Validators.required,
                    Validators.minLength(2)
                  ]
                )],
    userAnimal: ['',
                Validators.compose(
                  [
                    Validators.required,
                    Validators.minLength(2)
                  ]
                )]
  });
}

newAnimal(){
  console.log(this.animalForm.value);

this.animals.push({
  userAnimal: this.animalForm.value.userAnimalName
})


  this.animalForm.reset();
}

}
