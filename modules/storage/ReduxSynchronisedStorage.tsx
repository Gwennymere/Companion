// import { Store } from "@reduxjs/toolkit";
// import { INITIAL_POPULATION_ACTION } from "../state/Reducers";
// import { SYNCHRONIZED_STATE } from "../state/State";
// import { Entity, GenericStorage, Identifier } from "./GenericStorage";

// // TODO Next Change to composition
// abstract class ReduxSynchronisedStorage<ReduxState, CapsuledState, _Entity extends Entity<Payload>, Payload> implements GenericStorage<Payload> {
//     private store: Store;
//     private oldState: ReduxState;

//     constructor(store: Store, type: INITIAL_POPULATION_ACTION) {
//         this.populateState(type);
//     }

//     private async populateState(type: INITIAL_POPULATION_ACTION): Promise<void> {
//         this.fetchAll()
//             .then((entities) => {
//                 this.store.dispatch({
//                     type,
//                     payload: {entities: entities}
//                 })
//             });
//         this.store.subscribe(this._handleStateChange);
//     }

//     private _handleStateChange(): void {
//         const currentState: ReduxState = this.store.getState();

//         const oldSyncedState = this.getSynchronizedState(this.oldState);
//         const newSyncedState = this.getSynchronizedState(currentState);

//         if (oldSyncedState?.initialized && newSyncedState?.initialized) {
//             this.handleStateChange(oldSyncedState.capsuledState, newSyncedState.capsuledState);
//         }
//     };

//     // TODO zis is not very nice. Wäre geiler, wenn der die Entity direkt kennen würdep
//     protected abstract getSynchronizedState(currentState: ReduxState): SYNCHRONIZED_STATE<CapsuledState>;

//     protected abstract handleStateChange(oldState: CapsuledState, newState: CapsuledState): void;

//     abstract save(entity: _Entity): Promise<_Entity>;
//     abstract fetch(identifier: Identifier): Promise<_Entity>;
//     abstract fetchAll(): Promise<Array<_Entity>>;
//     abstract delete(identifier: Identifier): Promise<void>;
// }