import { Component, input, effect } from '@angular/core';


@Component({
  selector: 'app-test-child',
  imports: [],
  templateUrl: './test-child.html',
  styleUrl: './test-child.scss',
})
export class TestChild {
  title = input<string>();
  testData= input<TestData>();
  constructor() {
    effect(() => {
      console.log('testData changed:', this.testData())
    });

  }

}
