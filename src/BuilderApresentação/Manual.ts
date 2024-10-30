export class Manual {
    content: string;

    constructor() {
        this.content = "";
    }

    addContent(text: string) {
        this.content += text + "\n";
    }
}