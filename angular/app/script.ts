export class Script {
    title: string;
    shortcut: string;
    color: string;
    content: string;

    public constructor(init?:Partial<Script>) {
        Object.assign(this, init);
    }
}