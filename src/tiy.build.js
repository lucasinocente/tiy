function click(step) {

    log(`[Click] [${step.type}] [${step.element}]`);
    
    const el = findElement(step);

    if (el) {
        log(`[Click] ${el.outerHTML}`);
        el.click();
        log(true);
    }
    
}

function read(step) {

    log(`[Read] [${step.type}] [${step.element}]`);
    
    const el = findElement(step);

    if (!el) {
        return;
    }

    log(`[Read] [${el.outerHTML}] [Expect] [${step.expect}]`);

    if (el.innerText == step.expect) {
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

    log(`[Starting] ${test.name}`)
    let steps = test.steps;
    
    steps.forEach(function(step, index) {
        self = this;
        setTimeout(function(){ 
            self.step(step);
        }, (index + 1) * 500);
    });

}

function findElement(step) {

    let elementId, elementClass;

    switch(step.type) {
        case 'id':
            elementId = document.getElementById(step.element);
            break;
        case 'class':
            elementClass = document.getElementsByClassName(step.element)[0];
            break;
        default:
            log(`Element ${step.type} not supported by API`);
            break;
    }

    if (elementId || elementClass) {
        return elementId || elementClass;
    } else {
        log(`[${step.type}] [${step.element}] [Not found]`);
        log(false);
        return undefined;
    }

}

function step(step) {

    switch(step.action) {
        case 'click':
            click(step);
            break;
        case 'read':
            read(step);
            break;
        default:
            log('Action not supported by API')
            break;
    }

}