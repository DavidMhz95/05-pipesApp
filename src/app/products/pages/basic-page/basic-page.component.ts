import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'david'
  public nameUpper: string = 'David'
  public fullName: string = 'DaViD'

  public customDate: Date = new Date()
}
