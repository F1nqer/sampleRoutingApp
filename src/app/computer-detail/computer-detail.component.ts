import {Component, Inject, OnInit} from '@angular/core';
import { Computer } from '../shared/computer';
import {ActivatedRoute, Params} from '@angular/router';
import { ComputerService } from '../services/computer.service';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {
  computer: Computer;
  errMsg: string;
  constructor(private route: ActivatedRoute,
              private computerService: ComputerService,
              @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.computerService.getComputerById(params.id);
      }))
      .subscribe(computer => {
        this.computer = computer;
      }, error => this.errMsg = error);
  }
}
