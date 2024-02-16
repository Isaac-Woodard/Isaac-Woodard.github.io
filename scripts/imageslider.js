class ImageSlider {
    #id;
    #width; #height;
    #images; #alts; #captions;
    #current;

    constructor(id, width, height, images, alts, captions) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.images = images;
        this.alts = alts;
        this.captions = captions;
        this.current = 0;

        this.makeSlider();
    }

    makeSlider() {
        let i = this.current;

        const div_display = document.createElement("div");
        div_display.setAttribute("class", "display");

        // Display Image
        const img = document.createElement("img");
        img.setAttribute("class", "slide");
        img.setAttribute("src", this.images[i]);
        img.setAttribute("alt", this.alts[i]);
        img.setAttribute("width", this.width.toString());
        img.setAttribute("height", this.height.toString());

        // Previous Button
        const prev = document.createElement("button");
        prev.setAttribute("class", "prev");
        prev.addEventListener("click", () => this.prevImage());
        prev.textContent = "❮";

        // Next Button
        const next = document.createElement("button");
        next.setAttribute("class", "next");
        next.addEventListener("click", () => this.nextImage());
        next.textContent = "❯";

        // div_display.appendChild(prev);
        div_display.appendChild(img);
        // div_display.appendChild(next);

        // Caption
        const caption = document.createElement("p");
        caption.setAttribute("class", "caption");
        caption.textContent = this.captions[i];

        // Dot Buttons
        const div_buttons = document.createElement("div");
        div_buttons.setAttribute("class", "buttonrow");
        div_buttons.appendChild(prev);
        for (let i = 0; i < this.images.length; i++) {
            const dot = document.createElement("button");
            dot.setAttribute("class", "dot");
            dot.addEventListener("click", () => this.setImage(i));
            div_buttons.appendChild(dot);
        }
        div_buttons.appendChild(next);

        // Add to Target
        const slider = document.getElementById(this.id);
        slider.appendChild(div_display);
        slider.appendChild(caption);
        slider.appendChild(div_buttons);
    }

    setImage(i) {
        const slider = document.getElementById(this.id);
        const div_display = slider.children[0];

        const img = div_display.children[0];
        img.setAttribute("src", this.images[i]);
        img.setAttribute("alt", this.alts[i]);

        const caption = slider.children[1];
        caption.textContent = this.captions[i];

        const div_buttons = slider.children[2];
        for (let j = 1; j < div_buttons.children.length-1; j++) {
            const dot = div_buttons.children[j];
            if (j-1 === i) {
                dot.setAttribute("class", "dot active")
            } else {
                dot.setAttribute("class", "dot")
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