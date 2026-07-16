import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { RouterLink,RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header-comp',
  imports: [MatCard,RouterLink, RouterLinkActive],
  templateUrl: './header-comp.html',
  styleUrl: './header-comp.scss',
})
export class HeaderComp {}
