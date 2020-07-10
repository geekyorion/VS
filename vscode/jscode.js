var encodedEl, decodedEl, codes;

const decodeThis = e => {
    let value = e.target.value.toLowerCase();
    let result = "";
    for (let i = 0; i < value.length; i++) {
        result += Object.keys(codes).find(key => codes[key] === value[i]) || value[i];
    }
    decodedEl.value = result;
}

const encodeThis = e => {
    let value = e.target.value.toLowerCase();
    let result = "";
    for (let i = 0; i < value.length; i++) {
        result += codes[value[i]] || value[i];
    }
    encodedEl.value = result;
}

window.onload = () => {
    encodedEl = document.getElementById("encoded");
    decodedEl = document.getElementById("decoded");

    codes = {
        "a": "@",
        "b": ";",
        "c": "'",
        "d": "₹",
        "e": "|",
        "f": "_",
        "g": "&",
        "h": "-",
        "i": ">",
        "j": "+",
        "k": "(",
        "l": ")",
        "m": "?",
        "n": "!",
        "o": "{",
        "p": "}",
        "q": "%",
        "r": "=",
        "s": "#",
        "t": "[",
        "u": "<",
        "v": ":",
        "w": "\\",
        "x": '"',
        "y": "]",
        "z": "*"
    };

    encodedEl.addEventListener("input", decodeThis);
    decodedEl.addEventListener("input", encodeThis);
}

const clearText = () => {
    encodedEl.value = "";
    decodedEl.value = "";
}

const copyText = el => {
    el === "encoded"
        ? encodedEl.select()
        : decodedEl.select();
    document.execCommand("copy");
}
