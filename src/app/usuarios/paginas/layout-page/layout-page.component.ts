import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { ISesion } from '../../../auth/interfaces/isesion';



@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,],
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private authService: AuthService, private router: Router){

  }

  get sesion(): ISesion | undefined{
    return this.authService.currentSesion;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    logOut():void {
      this.authService.logOut();
      this.router.navigateByUrl("/");
    }
}
