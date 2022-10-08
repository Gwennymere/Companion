import * as SecureStore from 'expo-secure-store';

export class LocalStorage<Type> implements IOManager<Type> {
    async save(entity: Entity<Type>): Promise<Entity<Type>> {
        return SecureStore.setItemAsync(entity.id.toString(), JSON.stringify(entity.payload))
            .then(() => {
                return entity;
            })
            .catch((reason) => {
                throw new ErrorOnSaveToLocalStorageException(reason);
            });
    }

    async fetch(identifier: Identifier): Promise<Entity<Type>> {
        return SecureStore.getItemAsync(identifier.toString())
        .then((result) => {
            return JSON.parse(result);
        })
        .catch((reason) => {
            throw new ErrorOnLoadFromLocalStorageException(reason)
        });
    }

}