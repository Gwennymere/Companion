export interface IOManager<_Entity extends Entity<Payload>, Payload> {
    save(entity: _Entity): Promise<_Entity>;

    fetch(identifier: Identifier): Promise<_Entity>;

    delete(identifier: Identifier): Promise<void>;
}

export abstract class Entity<Payload> {
    public readonly id: Identifier;
    private _payload: Payload;
    private _version: number;
    
    constructor(id: Identifier) {
        this.id = id;
    }

    public get payload(): Payload {
        return this._payload;
    }
    public set payload(value: Payload) {
        this._payload = value;
    }

    public get version(): number {
        return this._version;
    }
    public set version(value: number) {
        this._version = value;
    }
}

export type Identifier = String | Number;