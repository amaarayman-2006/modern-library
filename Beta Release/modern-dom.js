class DOM {
    /*

    This is a js library made by A.A2006

    */
    #info;
    constructor() {
        this.#info = "Modern libraries of js and css are made by A.A2006";
        this.location;
        this.element1;
        this.element2;
    }
    copywrites() {
        console.log('%c' + this.#info, 'color: blue;font-size: 16px;');
    }
    locate(dir) {
        let x;
        x = document.querySelector(dir);
        this.location = x;
        return this;
    }
    extract(dir) {
        let x;
        x = document.querySelector(dir);
        return x;
    }
    html(code) {
        this.location.innerHTML = code;
        return this;
    }
    text(text) {
        this.location.textContent = text;
        return this;
    }
    hide() {
        this.location.style.display = "none";
        return this;
    }
    show() {
        this.location.style.display = "block";
        return this;
    }
    doElement(element, value) {
        var x = document.createElement(element);
        if (value != undefined || value != null) {
            x.innerHTML = value;
        } else {
            x.innerHTML = "";
        }
        this.element1 = x;
        return this;
    }
    appender(para) {
        para.appendChild(this.element1);
        return this;
    }
    doClass(value) {
        this.location.setAttribute("class", value);
        return this;
    }
    doId(value) {
        this.location.setAttribute("id", value);
        return this;
    }
    reId(value) {
        this.location.changeattribute("id", value);
        return this;
    }
    reClass(value) {
        this.location.changeAttribute("class", value);
        return this;
    }
    deId() {
        this.location.removeAttribute("id");
        return this;
    }
    deClass() {
        this.location.removeAttribute("class");
        return this;
    }
    doAttr(attr, value) {
        this.location.setAttribute(attr, value);
        return this;
    }
    reAttr(attr, value) {
        this.location.changeAttribute(attr, value);
        return this;
    }
    deAttr(attr) {
        this.location.removeAttribute(attr);
        return this;
    }
    /* event(event, func) {
        this.location.addEventListener(event, func);
    } */
    contains(element) {
        return this.location.contains(element);
    }
    style(style) {
        this.location.style.cssText = style;
        /* other styles must not be inline in order to work functionally */
    }
    extractStyle(dir) {
        return dir.style.cssText;
    }

}

let dom = new DOM();
dom.copywrites();

