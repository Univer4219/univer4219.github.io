"use strict";
var _a, _b, _c, _d, _e, _f;
const binarySearch = function* (sortedArray, target) {
    let low_bound = 0;
    let right_bound = sortedArray.length - 1;
    yield {
        boundaries: { low_bound, right_bound: right_bound + 1 },
        shadows: {
            left_side: { start: 0, span: 0 },
            right_side: {
                start: right_bound + 1,
                span: 0,
            },
        },
    };
    while (low_bound <= right_bound) {
        let middle = Math.floor((low_bound + right_bound) / 2);
        yield {
            pointers: { middle },
        };
        if (sortedArray[middle] === target) {
            // found the key
            return middle;
        }
        else if (sortedArray[middle] < target) {
            // continue searching to the right
            low_bound = middle + 1;
        }
        else {
            // search searching to the left
            right_bound = middle - 1;
        }
        yield {
            boundaries: { low_bound, right_bound: right_bound + 1 },
            shadows: {
                left_side: { start: 0, span: low_bound },
                right_side: {
                    start: right_bound + 1,
                    span: sortedArray.length - 1 - right_bound,
                },
            },
        };
    }
    // key wasn't found
    return -1;
};
const linearSearch = function* (sortedArray, target) {
    yield {
        boundaries: { low_bound: 0 },
        shadows: {
            left_side: { start: 0, span: 0 },
        },
    };
    for (let i = 0; i < sortedArray.length; i++) {
        yield {
            pointers: {
                middle: i,
            },
        };
        if (sortedArray[i] === target)
            return i;
        yield {
            boundaries: { low_bound: i + 1 },
            shadows: {
                left_side: { start: 0, span: i + 1 },
            },
        };
    }
    return -1;
};
const funkySearch = function* (sortedArray, target) {
    let low_bound = 0;
    let high_bound = sortedArray.length - 1;
    let change = 1;
    yield {
        boundaries: { low_bound, high_bound: high_bound + 1 },
        shadows: {
            left_side: { start: 0, span: 0 },
            right_side: {
                start: high_bound + 1,
                span: 0,
            },
        },
    };
    while (low_bound <= high_bound) {
        if (change == 1) {
            yield {
                pointers: {
                    middle_left: low_bound,
                },
            };
            if (sortedArray[low_bound] === target)
                return low_bound;
            yield {
                boundaries: { low_bound: low_bound + 1 },
                shadows: {
                    left_side: { start: 0, span: low_bound + 1 },
                },
            };
            low_bound += 1;
            change = -1;
        }
        else {
            yield {
                pointers: {
                    middle_right: high_bound,
                },
            };
            if (sortedArray[high_bound] === target)
                return high_bound;
            yield {
                boundaries: { high_bound: high_bound },
                shadows: {
                    right_side: {
                        start: high_bound,
                        span: sortedArray.length - high_bound,
                    },
                },
            };
            high_bound -= 1;
            change = 1;
        }
    }
    return -1;
};
const justGoingForIt = function* (sortedArray, target) {
    let len = sortedArray.length;
    while (true) {
        let trial = getRandomInt(0, len);
        yield {
            pointers: { trial },
        };
        yield {};
        if (sortedArray[trial] === target)
            return trial;
    }
};
const AtLeastIamTrying = function* (sortedArray, target) {
    let len = sortedArray.length;
    let triedIndex = {};
    let trials = 0;
    while (true) {
        let trial = getRandomInt(0, len);
        if (triedIndex[trial])
            continue;
        yield {
            pointers: {
                middle: trial,
            },
        };
        triedIndex[trial] = true;
        trials++;
        if (sortedArray[trial] === target)
            return trial;
        yield {
            shadows: {
                [trial]: { start: trial, span: 1 },
            },
        };
        if (trials >= len)
            return -1;
    }
};
function getBoundingClientRectAtIndex(idx, arrayAsHTML) {
    var _a;
    if (idx >= arrayAsHTML.length) {
        let lastRect = (_a = arrayAsHTML[arrayAsHTML.length - 1]) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        return {
            x: lastRect.x + lastRect.width,
            width: lastRect.width,
        };
    }
    return arrayAsHTML[idx].getBoundingClientRect();
}
/**
 * This inner class takes care of rendering the boundaries ( search range limitation )
 * for the arrayVisualizer
 */
class ArrayBoundariesManager {
    constructor(container) {
        this.container = container;
        this.boundaries = {};
    }
    /**
     * Returns the bound with specified name that should be used for boundaries update;
     *
     * @param name name ( id ) of the bound
     */
    getDomBound(name) {
        name = "boundary_" + name;
        const bound = this.boundaries[name];
        if (!bound) {
            const bound = document.createElement("div");
            bound.id = name;
            bound.classList.add("bound");
            this.boundaries[name] = bound;
            this.container.appendChild(bound);
            return bound;
        }
        return bound;
    }
    /**
     * Update the dom with the given instructions. Each keys of the boundaries object maps to a
     * unique div in the DOM. This bound is then moved according to the number ( which server as index)
     * passed has it's associated value. The bound place itself at the beginning of the KeyDiv that corresponds to it's index.
     *
     * @param boundaries Object with keys the name ( id ) of the bound.
     * @param arrayAsHTML Array of Divs used to render the array.
     */
    display(boundaries, arrayAsHTML) {
        for (const key in boundaries) {
            const idx = boundaries[key];
            let rect = getBoundingClientRectAtIndex(idx, arrayAsHTML);
            let container = this.container.getBoundingClientRect();
            if (!rect)
                return;
            const bound = this.getDomBound(key);
            bound.style.transform = `translateX(${rect.x - container.x}px)`;
        }
    }
}
class ShadowManager {
    constructor(container) {
        this.container = container;
        this.shadows = {};
    }
    getDomShadow(name) {
        name = "shadow_" + name;
        const shadow = this.shadows[name];
        if (!shadow) {
            const shadow = document.createElement("div");
            shadow.id = name;
            shadow.classList.add("shadow");
            this.shadows[name] = shadow;
            this.container.appendChild(shadow);
            return shadow;
        }
        return shadow;
    }
    display(shadows, arrayAsHTML) {
        for (const shadowId in shadows) {
            const { start, span } = shadows[shadowId];
            let rect1 = getBoundingClientRectAtIndex(start, arrayAsHTML);
            let rect2 = getBoundingClientRectAtIndex(start + span, arrayAsHTML);
            if (!rect2 || !rect1)
                return;
            const shadow = this.getDomShadow(shadowId);
            let container = this.container.getBoundingClientRect();
            shadow.style.transform = `translateX(${rect1.x - container.x}px)`;
            shadow.style.width = rect2.x - rect1.x + "px";
        }
    }
}
class PointerManager {
    constructor(container) {
        this.container = container;
        this.pointers = {};
        this.arrayPointer = document.getElementById("array-pointer");
    }
    getDomPointer(name) {
        name = "pointer_" + name;
        const pointer = this.pointers[name];
        if (!pointer) {
            const pointer_svg = this.arrayPointer.cloneNode(true);
            const pointer = document.createElement("div");
            pointer.appendChild(pointer_svg);
            pointer.classList.add("pointer");
            pointer.id = name;
            this.pointers[name] = pointer;
            this.container.appendChild(pointer);
            return pointer;
        }
        return pointer;
    }
    display(pointers, arrayAsHTML) {
        for (const pointer_id in pointers) {
            let pointer_location = pointers[pointer_id];
            let pointer = this.getDomPointer(pointer_id);
            let targetNode = arrayAsHTML[pointer_location];
            if (targetNode === undefined)
                throw new Error(`Index out of bound`);
            let { width, height, x, y } = targetNode.getBoundingClientRect();
            x = x + width / 2 - pointer.clientWidth / 2;
            pointer.style.transform = `translate(${x}px, ${y}px )`;
        }
    }
}
class CachedSearchGenerator {
    constructor(searchGenerator) {
        this.searchGenerator = searchGenerator;
        this.generatorIndex = 0;
        this.generatorCache = [];
    }
    next() {
        this.generatorIndex++;
        if (!this.generatorCache[this.generatorIndex]) {
            const nextYield = this.searchGenerator.next();
            this.cache(nextYield);
        }
        return this.getIndex(this.generatorIndex);
    }
    previous() {
        return this.getIndex(--this.generatorIndex);
    }
    setStepTo(idx) {
        this.generatorIndex = idx;
    }
    getIndex(index) {
        if (this.generatorCache[index] === undefined) {
            if (index < this.generatorIndex)
                this.generatorIndex = 0;
            while (index > this.generatorIndex) {
                this.next();
            }
        }
        return this.generatorCache[index];
    }
    get current() {
        return this.getIndex(this.generatorIndex);
    }
    cache(value) {
        this.generatorCache[this.generatorIndex] = value;
        // could be written in one line as
        // this.generatorCache[this.generatorIndex++] = value;
        // But may be a little less readable.
    }
}
class SearchVisualizer {
    constructor(array, target, containerId, searchAlgorithmGenerator) {
        this.array = array;
        this.target = target;
        this.containerId = containerId;
        this.searchAlgorithmGenerator = searchAlgorithmGenerator;
        this.arrayAsHTML = array.map((idx) => this.createNodeForIndex(idx));
        this.searchAlgorithm = new CachedSearchGenerator(searchAlgorithmGenerator(array, target));
        this.container = document.getElementById(containerId);
        this.shadowManager = new ShadowManager(this.container);
        this.pointerManager = new PointerManager(this.container);
        this.arrayBoundariesManager = new ArrayBoundariesManager(this.container);
        //
    }
    setArray(array) {
        this.array = array;
        this.syncDomArray();
        this.refresh();
    }
    setTarget(target) {
        this.target = target;
        this.syncDomArray();
        this.refresh();
    }
    setSearchAlgorithm(searchAlgorithmGenerator) {
        this.searchAlgorithm = new CachedSearchGenerator(searchAlgorithmGenerator(this.array, this.target));
        this.refresh();
    }
    terminate() {
        this.container.remove();
    }
    init() {
        this.syncDomArray();
    }
    moveForward() {
        const { value } = this.searchAlgorithm.next();
        if (!value || typeof value !== "object")
            return false;
        this.render(value);
        return true;
    }
    moveBackward() {
        const { value } = this.searchAlgorithm.previous();
        if (!value || typeof value !== "object")
            return false;
        this.render(value);
        return true;
    }
    refresh() {
        var _a;
        const value = (_a = this.searchAlgorithm.current) === null || _a === void 0 ? void 0 : _a.value;
        if (!value || typeof value !== "object")
            return;
        this.render(value);
    }
    setIndex(index) {
        this.searchAlgorithm.setStepTo(index);
        this.refresh();
    }
    syncDomArray() {
        this.arrayAsHTML.forEach((node) => node.remove());
        this.arrayAsHTML = this.array.map((idx) => this.createNodeForIndex(idx));
        this.arrayAsHTML.forEach((node) => this.container.appendChild(node));
    }
    render({ pointers, boundaries, shadows }) {
        if (shadows)
            this.shadowManager.display(shadows, this.arrayAsHTML);
        if (pointers)
            this.pointerManager.display(pointers, this.arrayAsHTML);
        if (boundaries)
            this.arrayBoundariesManager.display(boundaries, this.arrayAsHTML);
    }
    createNodeForIndex(idx) {
        let number = document.createElement("div");
        number.classList.add("number");
        number.innerHTML = `${idx}`;
        let number_container = document.createElement("div");
        number_container.classList.add("number-container");
        number_container.appendChild(number);
        if (idx === this.target) {
            number_container.style.backgroundColor = "#60e560";
            number_container.style.color = "#fff";
        }
        let number_wrapper = document.createElement("div");
        number_wrapper.classList.add("number-wrapper");
        number_wrapper.appendChild(number_container);
        return number_wrapper;
    }
}
let pointer = document.getElementById("pointer");
let left_bound = document.getElementById("left-bound");
let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
const createExample = (length) => {
    let example = [];
    example.push(getRandomInt(0, 4));
    for (let i = 0; i < length; i++) {
        example.push(example[example.length - 1] + getRandomInt(3, 8));
    }
    return example;
};
class HandlerChangeEvent {
    constructor() {
        this.changeCallback = [];
    }
    set onChange(arg) {
        this.changeCallback.push(arg);
    }
    executeChangeCallback(e) {
        this.changeCallback.forEach((cb) => cb(e));
    }
}
class SingleFieldInputHandler extends HandlerChangeEvent {
    constructor(inputId, initialValue) {
        super();
        this.inputId = inputId;
        this.inputElement = document.getElementById(inputId);
        this._value = initialValue !== null && initialValue !== void 0 ? initialValue : "";
        this.inputElement.addEventListener("change", this.onInputChange.bind(this));
        this.syncDomInput();
    }
    syncDomInput() {
        this.inputElement.value = this._value;
    }
    onInputChange(e) {
        //@ts-ignore
        this.value = e.target.value;
        this.executeChangeCallback(e);
        this.syncDomInput();
    }
    set value(newValue) {
        this._value = newValue;
        this.syncDomInput();
    }
    get value() {
        return this._value;
    }
}
class CheckboxInputHandler extends HandlerChangeEvent {
    constructor(name, defaultValue = {}) {
        super();
        this.choices = {};
        let checkboxes = document.querySelectorAll(`input[type="checkbox"][name=${name}]`);
        this.checkboxInputs = Array.from(checkboxes);
        this.checkboxInputs.forEach((checkbox) => {
            checkbox.addEventListener("change", this.onInputChange.bind(this));
        });
        this.choices = defaultValue;
        this.syncDomInput();
        const evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        this.checkboxInputs[0].dispatchEvent(evt);
    }
    onInputChange(e) {
        const target = e.target;
        let name = target.getAttribute("value");
        this.choices[name] = target.checked;
    }
    addEventListener(name, handler) {
        this.checkboxInputs.forEach((checkbox) => checkbox.addEventListener(name, handler));
    }
    syncDomInput() {
        this.checkboxInputs.forEach((input) => {
            input.checked = this.choices[input.getAttribute("value")];
        });
    }
}
class Renderer {
    constructor(container) {
        this.container = container;
        this.activeVisualizers = {};
        this.labels = {};
        this.executionTracker = 0;
    }
    getSearchVisualizer(name) {
        let visualizer = this.activeVisualizers[name];
        const nameMap = {
            funkySearch: "Double linear",
            linearSearch: "Linear search",
            binarySearch: "Binary search",
            justGoingForIt: "Random indexing",
            AtLeastIamTrying: "Random indexing + caching"
        };
        if (!visualizer) {
            const container = document.createElement("div");
            container.id = "container_" + name;
            container.classList.add("container");
            const label = document.createElement("label");
            label.classList.add("algorithm-label");
            label.textContent = nameMap[name];
            this.container.appendChild(label);
            this.container.appendChild(container);
            let searchVisualizer = new SearchVisualizer([5, 12, 45, 56], 12, "container_" + name, binarySearch);
            searchVisualizer.init();
            this.labels[name] = label;
            this.activeVisualizers[name] = searchVisualizer;
        }
        return this.activeVisualizers[name];
    }
    render(array, target, algorithms) {
        const preserved = {};
        algorithms.forEach((name) => {
            preserved[name] = true;
            const visualizer = this.getSearchVisualizer(name);
            visualizer.setArray(array);
            visualizer.setTarget(target);
            visualizer.setSearchAlgorithm(implementedAlgorithm[name]);
        });
        this.clean(preserved);
    }
    clean(preserve) {
        Object.keys(this.activeVisualizers).forEach((algorithm) => {
            if (!preserve[algorithm]) {
                this.activeVisualizers[algorithm].terminate();
                delete this.activeVisualizers[algorithm];
                this.labels[algorithm].remove();
            }
        });
    }
    moveBackward() {
        Object.keys(this.activeVisualizers).forEach((algorithm) => {
            this.activeVisualizers[algorithm].moveBackward();
        });
    }
    moveForward() {
        let hasMoved = false;
        Object.keys(this.activeVisualizers).forEach((algorithm) => {
            if (this.activeVisualizers[algorithm].moveForward())
                hasMoved = true;
        });
        return hasMoved;
    }
    syncVisualizersAtIndex(index) {
        Object.keys(this.activeVisualizers).forEach((algorithm) => {
            this.activeVisualizers[algorithm].setIndex(index);
        });
    }
}
// programm starts here
const arrayInput = new SingleFieldInputHandler("array-input", "1 2 3 4 5 6 7 8 9");
const algorithmType = new CheckboxInputHandler("search-algorithm", { binarySearch: true, funkySearch: true });
const target = new SingleFieldInputHandler("target-input", "3");
const arrayLength = new SingleFieldInputHandler("length-input", "8");
function SyncLengthToArray() {
    arrayInput.onChange = function (e) {
        arrayLength.value = getArray(arrayInput.value).length + "";
        update();
    };
    arrayLength.onChange = function (e) {
        let newArray = getArray(arrayInput.value);
        let desiredLength = parseInt(arrayLength.value);
        if (desiredLength < newArray.length) {
            newArray = newArray.slice(0, desiredLength);
        }
        else if (desiredLength > newArray.length) {
            while (desiredLength > newArray.length) {
                newArray.push(newArray[newArray.length - 1] + getRandomInt(3, 5));
            }
        }
        arrayInput.value = newArray.join(" ");
        update();
    };
    // arrayInput.executeChangeCallback();
    // arrayLength.executeChangeCallback();
}
const visualizationCanvas = document.getElementById("visualization-canvas");
let renderer = new Renderer(visualizationCanvas);
const getArray = (arrayInput) => {
    return arrayInput
        .split(" ")
        .map((string_int) => parseInt(string_int))
        .filter((numberMayBe) => !isNaN(numberMayBe));
};
const implementedAlgorithm = {
    funkySearch,
    linearSearch,
    binarySearch,
    justGoingForIt,
    AtLeastIamTrying
};
const getAlgorithms = (algorithmHashMap) => {
    return Object.keys(algorithmHashMap).filter((algorithmName) => algorithmHashMap[algorithmName] && implementedAlgorithm[algorithmName]);
};
const update = () => {
    renderer.render(getArray(arrayInput.value), parseInt(target.value), getAlgorithms(algorithmType.choices));
};
algorithmType.addEventListener("change", update);
target.onChange = update;
class ExecutionControl {
    constructor(renderer) {
        this.renderer = renderer;
        this.isExecuting = false;
        this.containers = [];
    }
    bindTo(container) {
        container.addEventListener("click", this.toggle.bind(this));
        container.innerHTML = ` 
    <svg   viewBox="0 0 16 16" fill="#41cd41" class="bi bi-triangle-fill" style="transform: rotate(30deg) translateY(-2px)">
          <path  fill="#41cd41" fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
      </svg>
      `;
        this.containers.push(container);
        return this;
    }
    toggle() {
        this.isExecuting ? this.stopExecution() : this.execute();
    }
    execute() {
        this.stopExecution();
        this.executionInterval = setInterval(() => {
            if (!this.renderer.moveForward())
                this.stopExecution();
        }, 750);
        this.containers.forEach((container) => {
            container.innerHTML = `
      <svg x="0px" y="0px"   viewBox="0 0 332.145 332.146" style="enable-background:new 0 0 332.145 332.146;" xml:space="preserve" >
    <path fill="#41cd41" d="M121.114,0H25.558c-8.017,0-14.517,6.5-14.517,14.515v303.114c0,8.017,6.5,14.517,14.517,14.517h95.556    c8.017,0,14.517-6.5,14.517-14.517V14.515C135.631,6.499,129.131,0,121.114,0z M106.6,303.113H40.072V29.031H106.6V303.113z"/>
    <path fill="#41cd41" d="M306.586,0h-95.541c-8.018,0-14.518,6.5-14.518,14.515v303.114c0,8.017,6.5,14.517,14.518,14.517h95.541    c8.016,0,14.518-6.5,14.518-14.517V14.515C321.102,6.499,314.602,0,306.586,0z M292.073,303.113h-66.514V29.031h66.514V303.113z"/>
        </svg>`;
        });
        this.isExecuting = true;
    }
    stopExecution() {
        if (this.executionInterval)
            clearInterval(this.executionInterval);
        this.containers.forEach((container) => {
            container.innerHTML = `
      <svg   viewBox="0 0 16 16" fill="currentColor" class="bi bi-triangle-fill" style="transform: rotate(30deg) translateY(-2px)">
          <path fill="#41cd41" fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
      </svg>`;
        });
        this.isExecuting = false;
    }
}
const controls = new ExecutionControl(renderer).bindTo(document.getElementById("run-pause"));
(_a = document.getElementById("reset-algorithm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    renderer.clean({});
    update();
});
SyncLengthToArray();
update();
(_b = document.getElementById("run-algorithm")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    controls.execute();
});
(_c = document.getElementById("rewind-algorithm")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    renderer.moveBackward();
});
(_d = document.getElementById("pause-algorithm")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    renderer.stopExecution();
});
(_e = document.getElementById("advance-algorithm")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    renderer.moveForward();
});
(_f = document
    .getElementById("randomize-algorithm")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    const len = parseInt(arrayLength.value);
    let newArray = [getRandomInt(3, 5)];
    if (len < newArray.length) {
        newArray = newArray.slice(0, len);
    }
    else if (len > newArray.length) {
        while (len > newArray.length) {
            newArray.push(newArray[newArray.length - 1] + getRandomInt(3, 5));
        }
    }
    arrayInput.value = newArray.join(" ");
    target.value = newArray[getRandomInt(0, len)] + "";
    update();
});