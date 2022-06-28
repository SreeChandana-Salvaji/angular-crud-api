import { Component, ViewChild,OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'task';
  @ViewChild('dataTable',{static:false}) table: { nativeElement: any; };
  dataTable:any;
  constructor(){

  }
  ngAfterViewInit(): void {
    this.dataTable=$(this.table.nativeElement);
    this.dataTable.DataTable;
  }
  ngOnInit():void{
    
  }

}