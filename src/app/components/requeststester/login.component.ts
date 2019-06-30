import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  username: string;
  password: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'logintest-component',
  templateUrl: './logintest.component.html',
  styleUrls: ['./login.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExample {

  username: string;
  password: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {password: this.password, username: this.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });
  }

}

@Component({
  selector: 'logintest-popup-component',
  templateUrl: 'loginpopuptest.component.html',
  styleUrls: ['./login.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExampleDialog {
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
