import { Store } from "@reduxjs/toolkit";
import { INITIAL_POPULATION_ACTION } from "../state/Reducers";
import { Entity, GenericStorage, Identifier } from "./GenericStorage";

abstract class ReduxSynchronisedStorage<ReduxState, _Entity extends Entity<Payload>, Payload> implements GenericStorage<_Entity, Payload> {
    private store: Store;

    constructor(store: Store, type: INITIAL_POPULATION_ACTION) {
        this.populateState(type);
    }

    private async populateState(type: INITIAL_POPULATION_ACTION): Promise<void> {
        this.fetchAll()
            .then((entities) => {
                this.store.dispatch({
                    type,
                    payload: entities
                })
            });
    }

    // protected abstract subscribeToProperty(params: type): void;

    abstract save(entity: _Entity): Promise<_Entity>;
    abstract fetch(identifier: Identifier): Promise<_Entity>;
    abstract fetchAll(): Promise<Array<_Entity>>;
    abstract delete(identifier: Identifier): Promise<void>;
}