function click(id) {
    log(`[Click] [#${id}]`);
    const el = document.getElementById(id);
    if (el) {
        log(`[Click] ${el.outerHTML}`);
        el.click();
        log(true);
    } else {
        log(`[Click] [#${id} not found]`);
        log(false);
    }
}

function read(id, text) {
    log(`[Read] [#${id}]`);
    const el = document.getElementById(id);
    log(`[Read] [${el.outerHTML}] [Expect] [${text}]`);
    if (el.innerText == text) {
        log(true);
    } else {
        log(false);
    }
}

function log(log) {
    var result = document.getElementById('result');
    result.innerHTML += '<br>' 
    result.innerText += log;
    console.log(log)
}
