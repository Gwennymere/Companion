import * as SecureStore from 'expo-secure-store';
import { Entity, Identifier, GenericStorage } from '../GenericStorage';
import { ErrorOnDeleteFromLocalStorageException } from './exceptions/ErrorOnDeleteFromLocalStorageException';
import { ErrorOnLoadFromLocalStorageException } from './exceptions/ErrorOnLoadFromLocalStorageException';
import { ErrorOnSaveToLocalStorageException } from './exceptions/ErrorOnSaveToLocalStorageException';

export class LocalStorage<Payload> implements GenericStorage<Payload> {
    // TODO replace used storage with https://docs.expo.dev/versions/latest/sdk/filesystem/#installation
    async save(entity: Entity<Payload>): Promise<Entity<Payload>> {
        console.log("Saving generic entity: ", entity);
        return SecureStore.setItemAsync(entity.id.toString(), JSON.stringify(entity))
            .then(() => {
                return entity;
            })
            .catch((reason) => {
                throw new ErrorOnSaveToLocalStorageException(reason.message);
            });
    }

    async fetch(identifier: Identifier): Promise<Entity<Payload>> {
        return SecureStore.getItemAsync(identifier.toString())
        .then((result) => {
            if (result === null) {
                throw new ErrorOnLoadFromLocalStorageException("Entity with id " + identifier + " does not exist.");
            }
            console.log("Loaded generic entity: ", result);
            
            return JSON.parse(result);
        })
        .catch((reason) => {
            throw new ErrorOnLoadFromLocalStorageException(reason.message)
        });
    }

    fetchAll(): Promise<Entity<Payload>[]> {
        throw new Error('Method not implemented.');
    }

    async delete(identifier: Identifier): Promise<void> {
        return SecureStore.deleteItemAsync(identifier.toString())
            .catch((reason) => { throw new ErrorOnDeleteFromLocalStorageException(reason.message) })
    }
}