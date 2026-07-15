import { Component, input } from '@angular/core';


@Component({
  selector: 'app-test-child',
  imports: [],
  templateUrl: './test-child.html',
  styleUrl: './test-child.scss',
})
export class TestChild {
  title = input<string>();

}
