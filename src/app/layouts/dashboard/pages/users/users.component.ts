import { Component} from '@angular/core';
import { User } from './models';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './components/user-form/user-form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [
    {
      id: 'QA17061',
      firstName: 'Heidi',
      lastName: 'Heinz',
      email: 'hh@mail.com',
      password: '123',
      role: 'Estudiante'
    },
    {
      id: 'AR00065',
      firstName: 'Pedro',
      lastName: 'Lo',
      email: 'lop@mail.com',
      password: '123',
      role: 'Estudiante'
    }
  ];

  constructor(public dialogRef: MatDialog) {}

  openCreateModal(): void {
    const dialogRef = this.dialogRef.open(UserFormComponent);

    dialogRef.componentInstance.userSubmitted.subscribe((user) => {
      const newUser: User = {
        ...user,
        id: this.generateUniqueID()
      };
      this.onUserSubmitted(newUser); 
      dialogRef.close();
    });
  }
  onUserSubmitted(ev: User): void {
    this.dataSource = [...this.dataSource, ev];
  }
  
  deleteItem(element: User): void {
    const index = this.dataSource.indexOf(element);

    if (index >= 0) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
    }
  }

  editItem(element: User): void {
    this.dialogRef
      .open(UserEditComponent, {
        data: element,
      })
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.dataSource = this.dataSource.map((user) =>
              user.id === element.id ? { ...user, ...v } : user
            );
          }
        },
      });
  }
  private generateUniqueID(): string {
    const initials = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomNumbers = Math.floor(10000 + Math.random() * 90000).toString();
    const generatedID = initials + randomNumbers;

    return generatedID;
  }
}