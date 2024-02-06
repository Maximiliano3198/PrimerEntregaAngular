import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersService } from './users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [

  ];

  constructor(public dialogRef: MatDialog, private userService: UsersService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.setIsLoading(true)
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    })
  }

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
    this.loadingService.setIsLoading(true);
    this.userService
      .createUser({ ...ev })
      .subscribe({
        next: (users) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.loadingService.setIsLoading(false);
        }
      })
  }

  confirmDelete(element: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar a ${element.firstName} ${element.lastName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(element);
      }
    });
  }
  

  deleteItem(ev: User): void {
    this.loadingService.setIsLoading(true)
    this.userService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      }
    })
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