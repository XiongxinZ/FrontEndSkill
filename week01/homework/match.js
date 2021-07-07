// 用状态机实现“abababx”的字符匹配处理
function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
        if (state === end) {
            return true;
        }
    }
    return false;
}

function start(c) {
    if (c==="a")
        return foundA;
    else
        return start;
}

// trap
function end(c) {
    return end;
}

function foundA(c) {
    if (c==="b")
        return foundB;
    else
        return start(c);
}

function foundB(c) {
    if (c==="a")
        return foundA2;
    else
        return start(c);
}

function foundA2(c) {
    if (c==="b")
        return foundB2;
    else
        return start(c);
}

function foundB2(c) {
    if (c==="a")
        return foundA3;
    else
        return foundB(c);
}

function foundA3(c) {
    if (c==="b")
        return foundB3;
    else
        return start(c);
}

function foundB3(c) {
    if (c==="x")
        return end;
    else
        return foundB2(c);
}

console.log(match("ababxababx"))