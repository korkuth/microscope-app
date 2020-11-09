import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Microscope } from '../microscope';
import { MicroscopeService } from '../microscope.service';

@Component({
  selector: 'app-microscope-list',
  templateUrl: './microscope-list.component.html'
})
export class MicroscopeListComponent implements OnInit, OnDestroy {
  microscopes: Microscope[] = [];
  sub: Subscription;
  errorMessage = '';

  constructor(private microscopeService: MicroscopeService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.microscopeService.getMicroscopeList()
      .subscribe(
        microscopes => this.microscopes = microscopes,
        error => this.errorMessage = error
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  microscopeDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

}
