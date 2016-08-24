import { Pipe, PipeTransform } from '@angular/core';

import { Hashids } from '../';

@Pipe({ name: 'hashidsDecode' })
export class HashidsDecode implements PipeTransform {
    transform(value: string, salt?: string, alphabet?: string, minLength?: number) {
        let hashids = new Hashids(salt, minLength, alphabet);

        return hashids.decode(value);
    }
}