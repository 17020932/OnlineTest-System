import { JsonPipe } from '@angular/common';

export class FunctionCommon {
    // Hàm convert dạng '[1, 2]' --> [1, 2]
    convertJsonToArray(array: any){
        return JSON.parse(array);
    }

    // Hàm convert dạng [1, 2] --> '[1, 2]'
    convertArrayToJson(array: any){
        return JSON.stringify(array);
    }
}