import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FanService } from '../../services/fan.service';
import { AgeVerify } from '../../validators/ageverify.validator';
import { Fan } from '../../models/fan.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  fg! : FormGroup

  currentFan! : Fan
  index! : number
  constructor(
    private _fanService : FanService,
    private _builder : FormBuilder,
    private _router : Router,
    private _ar : ActivatedRoute
  ){
    //récupère l'index transmis par la route
    this.index = _ar.snapshot.params["id"]
    //récupère le bon fan dans le servie grace à son index
    this.currentFan = _fanService.getById(this.index)

    this.fg = _builder.group({
      name : [this.currentFan.name, Validators.required],
      birthdate : [this.currentFan.birthdate, AgeVerify(13)],
      favoriteShows : _builder.array([])
    }
  )
  //remplissage du FormArray 'favoriteShows' par le contenu de la liste de série du fan
  this.currentFan.favoriteShows?.forEach(el => {
    this.getFavoriteArray().push(new FormControl(el, Validators.required))
  })

  //correspondance c#
  // foreach(string el in favoriteShows){
  // }
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
    this._fanService.update(this.index, this.fg.value)
    this._router.navigate(["list"])
  }
}
