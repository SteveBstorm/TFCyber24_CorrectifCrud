import { Component } from '@angular/core';
import { FanService } from '../../services/fan.service';
import { Fan } from '../../models/fan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  fanList! : Fan[]

  constructor(private _service : FanService,
    private _router : Router
  ){
    this.fanList = _service.fanList
  }

  showDetail(index : number) {
    this._router.navigate(["detail", index])
  }

  showUpdate(index : number){
    this._router.navigate(["update", index])

  }

  deleteFan(index : number){
    this._service.delete(index)
  }
}
