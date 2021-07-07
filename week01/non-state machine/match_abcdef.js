function match(string) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;
    for(let c of string) {
        if (c == "a")
            foundA = true;
        else if (foundA && c == "b") {
            foundB = true;
            foundA = false;
        }
        else if (!foundA && foundB && c == "c") {
            foundC = true;
            foundB = false;
        }
        else if (!foundA && !foundB && foundC && c == "d") {
            foundD = true;
            foundC = false;
        }
        else if (!foundA && !foundB && !foundC && foundD && c == "e") {
            foundE = true;
            foundD = false;
        }
        else if (!foundA && !foundB && !foundC &&!foundD && foundE && c == "f")
            return true;
        else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}
//判断abcdef存在的充要条件是判断000001存在于字符所转换的布尔值中
console.log(match("abcdef"))