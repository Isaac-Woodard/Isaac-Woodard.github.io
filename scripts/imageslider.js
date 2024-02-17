class ImageSlider {
    #id;
    #width; #height;
    #images; #alts; #captions;
    #arrowclass; #dotclass;
    #current;

    /*
        Builds the html elements for an image slider on a target element with the
        specified id.

        width: Width to set for image elements.
        height: Height to set for image elements.
        arrowclass: Class(es) to add to previous and next buttons.
        dotclass: Class(es) to add to dot buttons.
    */
    constructor(id, width, height, images, alts, captions, arrowclass, dotclass) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.images = images;
        this.alts = alts;
        this.captions = captions;
        this.arrowclass = arrowclass;
        this.dotclass = dotclass;
        this.current = 0;

        this.makeSlider();
    }

    makeSlider() {
        const slider = document.getElementById(this.id);

        let i = this.current;

        const div_display = document.createElement("div");
        div_display.setAttribute("class", "display");
        slider.appendChild(div_display);

        // Display Image
        const img = document.createElement("img");
        img.setAttribute("class", "slide");
        img.setAttribute("src", this.images[i]);
        img.setAttribute("alt", this.alts[i]);
        img.setAttribute("width", this.width.toString());
        img.setAttribute("height", this.height.toString());

        div_display.appendChild(img);

        // Previous Button
        const prev = document.createElement("button");
        prev.setAttribute("class", "prev " + this.arrowclass);
        prev.addEventListener("click", () => this.prevImage());
        prev.textContent = "❮";

        // Next Button
        const next = document.createElement("button");
        next.setAttribute("class", "next " + this.arrowclass);
        next.addEventListener("click", () => this.nextImage());
        next.textContent = "❯";

        // Caption
        if (this.captions.length === this.images.length) {
            const caption = document.createElement("p");
            caption.setAttribute("class", "caption");
            caption.textContent = this.captions[i];
            slider.appendChild(caption);
        }

        // Dot Buttons
        const div_buttons = document.createElement("div");
        div_buttons.setAttribute("class", "buttonrow");
        div_buttons.appendChild(prev);
        for (let i = 0; i < this.images.length; i++) {
            const dot = document.createElement("button");
            if (i === 0) {
                dot.setAttribute("class", "dot active " + this.dotclass);
            } else {
                dot.setAttribute("class", "dot " + this.dotclass);
            }
            dot.addEventListener("click", () => this.setImage(i));
            div_buttons.appendChild(dot);
        }
        div_buttons.appendChild(next);
        slider.appendChild(div_buttons);
    }

    setImage(i) {
        const slider = document.getElementById(this.id);
        const div_display = slider.children[0];

        const img = div_display.children[0];
        img.setAttribute("src", this.images[i]);
        img.setAttribute("alt", this.alts[i]);

        let k = 1;
        if (this.captions.length === this.images.length) {
            const caption = slider.children[1];
            caption.textContent = this.captions[i];
            k = 2;
        }

        const div_buttons = slider.children[k];
        for (let j = 1; j < div_buttons.children.length-1; j++) {
            const dot = div_buttons.children[j];
            if (j-1 === i) {
                dot.setAttribute("class", "dot active " + this.dotclass)
            } else {
                dot.setAttribute("class", "dot " + this.dotclass)
            }
        }
    }

    nextImage() {
        let next = this.current + 1;
        if (next === this.images.length) {
            next = 0;
            this.current = next;
        } else {
            this.current++;
        }

        this.setImage(next);
    }

    prevImage() {
        let prev = this.current - 1;
        if (prev === -1) {
            prev = this.images.length - 1;
            this.current = prev;
        } else {
            this.current--;
        }

        this.setImage(prev);
    }
}