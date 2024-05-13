import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import {ButtonGroupModule} from 'primeng/buttongroup';
import {CardModule} from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule} from 'primeng/floatlabel';

import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    FieldsetModule,
    ButtonGroupModule,
    CardModule,
    InputTextModule,
    FloatLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
