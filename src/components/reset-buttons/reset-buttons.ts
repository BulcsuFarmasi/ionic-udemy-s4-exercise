import { Component, EventEmitter, Output } from '@angular/core';

import { Reset } from '../../interfaces/reset';

@Component({
    selector: 'reset-buttons',
    templateUrl: './reset-buttons.html'
})

export class ResetButtonsComponent{
    protected onReset:EventEmitter<Reset> = new EventEmitter();

    onResetAll () {
        let reset:Reset = {
            tapped: true,
            pressed: true
        }
        this.onReset.emit(reset);
    }
    onResetPressed() {
        let reset:Reset = {
            tapped: false,
            pressed: true
        }
        this.onReset.emit(reset);
    }
    onResetTapped () {
        let reset:Reset = {
            tapped: true,
            pressed: false
        }
        this.onReset.emit(reset);
    }
}