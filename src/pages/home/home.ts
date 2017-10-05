import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public tapped:number = 0;
    public pressed:number = 0;

    checkWon ():boolean {
      let correctTapped = 2;
      let correctPressed = 4;
      return (correctTapped === this.tapped && correctPressed === this.pressed);
    }

    onPress () {
      this.pressed++;
    }

    onTap () {
      this.tapped++;
    }
}
