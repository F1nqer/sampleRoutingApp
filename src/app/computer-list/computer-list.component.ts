import {Component, OnInit} from '@angular/core';
import { Computer } from '../shared/computer';
import { ComputerService } from '../services/computer.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {
  computers: Computer[];
  errMsg: string;
  constructor(private computerService: ComputerService) { }

  ngOnInit(): void {
    this.computerService.getComputers()
      .subscribe(computers => this.computers = computers,
        error => this.errMsg = error);
  }

}
