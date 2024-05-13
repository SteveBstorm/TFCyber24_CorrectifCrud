import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FanService } from '../../services/fan.service';
import { Router } from '@angular/router';
import { AgeVerify } from '../../validators/ageverify.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  fg! : FormGroup
  constructor(
    private _fanService : FanService,
    private _builder : FormBuilder,
    private _router : Router
  ){
    this.fg = _builder.group({
      name : [null, Validators.required],
      birthdate : [null, AgeVerify(13)],
      favoriteShows : _builder.array([])
    })
  }

  getFavoriteArray() : FormArray {
    return this.fg.get('favoriteShows') as FormArray
  }

  addShow(){
    this.getFavoriteArray().push(new FormControl(null, Validators.required))
  }

  deleteShow(index : number){
    this.getFavoriteArray().removeAt(index)
  }

  onSubmit(){
    this._fanService.create(this.fg.value)
    this._router.navigate(["list"])
  }
}
