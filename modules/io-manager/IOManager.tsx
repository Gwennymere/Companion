interface IOManager<Type> {
    save(entity: Entity<Type>): Promise<Entity<Type>>;

    fetch(identifier: Identifier): Promise<Entity<Type>>;
}

type Entity<Type> = {
    readonly id: Identifier;
    payload: Type;
    version: number;
}

type Identifier = String | Number;