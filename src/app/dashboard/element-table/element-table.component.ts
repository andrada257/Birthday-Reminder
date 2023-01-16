import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ElementService } from '../element.service';
import { ElementDialogComponent } from '../element-dialog/element-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-table',
  templateUrl: './element-table.component.html',
  styleUrls: ['./element-table.component.scss']
})
export class ElementTableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['position', 'name', 'surname', 'number', 'city', 'birthday', 'actions'];
  dataSource!:any;
  elementList!:any;
  symbolSearchValue!: string;
  constructor(public dialog: MatDialog, private elementService:ElementService,private router:Router) {}

  ngOnInit(): void {
    this.elementList = this.elementService.getElementList()
    this.dataSource = new MatTableDataSource(this.elementList);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.elementList.push(result.value);
        this.dataSource.data = this.elementList;
      }
    });
  }


  onDelete(row:any){
    console.log('Delete', row);
    const index = this.elementList.indexOf(row);
    if (index > -1) {
      this.elementList.splice(index, 1);
      this.dataSource.data = this.elementList;
    }
  }

  onEdit(row:any){
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '300px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        const elementIndex = this.elementList.findIndex((element:any) => element.position == result.value.position);
        this.elementList[elementIndex].name = result.value.name;
        this.elementList[elementIndex].surname = result.value.surname;
        this.elementList[elementIndex].number = result.value.number;
        this.elementList[elementIndex].city = result.value.city;
        this.elementList[elementIndex].birthday = result.value.birthday;
      }
    });
  }
  

  searchBySymbol() {
    console.log(this.symbolSearchValue);
    this.dataSource.data = this.elementList.filter((e:any) => e.name.indexOf(this.symbolSearchValue) >= 0 ||
                                                              e.surname.indexOf(this.symbolSearchValue) >= 0 ||
                                                              e.number.indexOf(this.symbolSearchValue) >=0 ||
                                                              e.city.indexOf(this.symbolSearchValue) >= 0||
                                                              e.birthday.indexOf(this.symbolSearchValue) >= 0);
  }


  clearSymbolSearch() {
    this.symbolSearchValue = "";
    this.dataSource = new MatTableDataSource(this.elementList);
  }

  logout() {
    //todo

    this.router.navigateByUrl('auth');
  }

}
