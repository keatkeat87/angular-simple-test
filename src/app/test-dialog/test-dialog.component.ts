import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SmallModal } from './small-modal/small-modal';

@Component({
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private smallDialog: SmallModal
  ) { }

  @ViewChild('dialogTemplate', { static: false, read: TemplateRef })
  dialogTemplate: TemplateRef<any>;

  ngOnInit() {
  }

  open(button: HTMLElement) {
    // const dialogRef = this.dialog.open(this.dialogTemplate, {
    //   data: {
    //     value: 'keatkeat'
    //   },
    //   hasBackdrop: true,
    //   position: {
    //     right: '400px'
    //   }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });


    const smallDialog = this.smallDialog.open(this.dialogTemplate, {
      origin: button,
      scrollContainer: new ElementRef(button),
      backdropClass: 'globalBackdropTransparent',
      data: {
        value: 'keatkeat'
      }
    });


  }
}
