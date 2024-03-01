"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const intro = () => {
    let name = 'mary';
    let age = 42;
    return `hi ${name} your age is ${age} `;
};
function getFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        return 26;
    });
}
console.log(intro(), getFavoriteNumber());
function fullname(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
console.log(`hello ${fullname('pepe', 'lorenzini')}`);
