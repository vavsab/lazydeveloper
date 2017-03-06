import { Injectable } from '@angular/core';

@Injectable()
export class ScriptService {
    private _value: number = 5;

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }
}