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

function runTests(json) {
    fetch(json)
    .then(response => response.json())
    .then((json) => {
        
        const tests = json.tests;

        tests.forEach(function(test, index) {
            setTimeout(function(){ 
                runStep(test); 
            }, index * 3000);
        });

    });
}

function runStep(test) {
    console.log(`[Starting] ${test.name} - ${test.steps}`)
    let steps = test.steps;
    
    steps.forEach(function(step, index) {
        self = this;
        setTimeout(function(){ 
            self.step(step);
        }, (index + 1) * 500);
    });

}

function step(step) {

    console.log('step', step)

    switch(step.action) {
        case 'click':
            click(step.elementId);
            break;
        case 'read':
            read(step.elementId, step.expect);
            break;
        default:
            console.log('Action not supported by API')
            break;
    }

}