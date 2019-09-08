import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';

import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;

  constructor( public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private studentApi: ApiService) { }

  ngOnInit() {
  }
/* Get errors */
public handleError = (controlName: string, errorName: string) => {
  return this.playerForm.controls[controlName].hasError(errorName);
}  

/* Submit book */
submitPlayerForm() {
  if (this.playerForm.valid) {
    this.studentApi.AddPlayer(this.playerForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/players-list'))
    });
  }
}
}
