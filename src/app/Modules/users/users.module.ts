import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
