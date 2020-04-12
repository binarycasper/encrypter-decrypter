import { Option } from "./options"

interface Cipher {
    name: string,
    id: string,
    option: Option, 
    procedure: (input:string, option:Option, passwords?:string[]) => string[]
}

import { Binary } from "./ciphers/binary"

const cipherArray: Cipher[] = [
    Binary
]

export { cipherArray } 
export { Cipher }