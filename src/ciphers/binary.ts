import { Cipher } from "../ciphers"
import { Option, Encrypt } from "../options"
import { input, action } from "../data"

const Binary:Cipher = {
    name: "Binary",
    id: "binary",
    option: action,
    procedure: (input, option) => {
        let output: number[] = []
        let finalOutput : string[] = []
        
        if(option == Encrypt) {
            var buffer = new Buffer (input, 'utf16le')
            for (var i = 0; i < buffer.length; i++) {
                output.push(buffer[i])
                finalOutput[i] = output[i].toString();
            }
        } else {

        }
        return finalOutput
    }
}

export { Binary }