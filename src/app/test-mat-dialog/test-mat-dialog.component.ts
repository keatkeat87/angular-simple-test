import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-test-mat-dialog',
  templateUrl: './test-mat-dialog.component.html',
  styleUrls: ['./test-mat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestMatDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
      

  }

  @ViewChild('dialog')
  dialogTemplate : TemplateRef<any>

  open() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '250px',
      data: { name : 'keatkeat' },
      disableClose : false,
      autoFocus : true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log(typeof(result))
    });
  }

}
