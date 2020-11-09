import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MicroscopeService } from '../microscope.service';

@Component({
  selector: 'app-microscope-details',
  templateUrl: './microscope-details.component.html'
})
export class MicroscopeDetailsComponent implements OnInit, OnDestroy {
  id: number;
  microscope: any;
  sub: Subscription;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private microscopeService: MicroscopeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.sub = this.microscopeService.getMicroscope(this.id)
      .subscribe(
        microscope => this.microscope = microscope,
        error => this.errorMessage = error
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  list(): void {
    this.router.navigate(['microscopes']);
  }
}
