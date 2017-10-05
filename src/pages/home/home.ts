import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public tapped:number = 0;
    public pressed:number = 0;

    onPress () {
      this.pressed++;
    }

    onTap () {
      this.tapped++;
    }
}
