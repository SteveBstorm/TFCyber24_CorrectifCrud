import { Component } from '@angular/core';
import { FanService } from '../../services/fan.service';
import { Fan } from '../../models/fan.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  currentFan! : Fan
  constructor(private _service : FanService,
    private _ar : ActivatedRoute
  ){
    let index = _ar.snapshot.params["id"]
    this.currentFan = this._service.getById(index)
  }
}
