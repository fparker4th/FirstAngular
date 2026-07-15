import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TestChild } from './test-child/test-child';

@Component({
  selector: 'app-test',
  
  imports: [
    MatCardModule, TestChild
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  testData: TestData = {
    id: 1,
    title: 'Test Title'
  };
}
