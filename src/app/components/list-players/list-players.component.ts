import { Player } from './../../shared/player';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

const Playersmock: Player[] = [
  { _id: "1", player_name: 'Virat Kohli',age:29, total_runs :1200,hundreds:20, wickets:37,strike:30},
  { _id: "2", player_name: 'MS Dhoni',age:38, total_runs :2300,hundreds:48, wickets:111,strike:45},
  { _id: "3", player_name: 'Rohit Sharma',age:30, total_runs :1500,hundreds:29, wickets:28,strike:20},

];

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})

export class ListPlayersComponent implements OnInit {
  PlayerData: any = [];
  dataSource = new MatTableDataSource<Player>(Playersmock);
  selection = new SelectionModel<Player>(true, []);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['select','_id', 'player_name', 'age'];
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Player): string {
    var defaultValue = 0;
    
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} all`;
  }
  constructor(private studentApi: ApiService) {
    this.studentApi.GetPlayer().subscribe(data => {
      this.PlayerData = data;
      this.dataSource = new MatTableDataSource<Player>(this.PlayerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  submit(){
    
  }
  ngOnInit() {
  }

}
