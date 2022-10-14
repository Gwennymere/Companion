import { useEffect } from 'react';
import { Button } from 'react-native-paper';
import { LocalStorage } from '../storage/local-storage/LocalStorage';
import Nugget, { NuggetPayload } from './Nugget';

export default function SynchronisedNuggetStorage() {
    // TODO bitte provider benutzen, sis
    let localstorage: LocalStorage<Nugget, NuggetPayload>;
    const id = "demo";
    const nugget: Nugget = new Nugget(id);
    nugget.version = 3;

    useEffect(() => { localstorage = new LocalStorage() }, [])

    return (
        <>
            <Button icon="tray-arrow-down"
                    mode="elevated"
                onPress={() => { localstorage.save(nugget).then(r => (console.log("saved " + r.id))) }}>
                Save
            </Button>
            <Button icon="tray-arrow-up"
                    mode="contained"
                    onPress={() => {localstorage.fetch(id).then(r => (console.log("fetched " + r.id)))}}>
                Load
            </Button>
            <Button icon="delete"
                    mode="elevated"
                onPress={() => { localstorage.delete(id).then(() => (console.log("deleted " + id))) }}>
                Delete
            </Button>
        </>
    )
}