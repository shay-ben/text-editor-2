import { openDB } from "idb";

const initdb = async () =>
  openDB( "jate", 1, {
    upgrade(db) {
      if (db.objectStoreName.contains('jate')) {
        console.log('jate db already exists');
        return;
      }
      
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
    console.log("we're in the database.");
    
  const contDb = await openDB("content", 1);
  const tx = contentDb.transaction("content", "readwrite");

  const store = tx.objectStore("content");
  
  const request = store.objectStore.put({ id: id, value: content });
  const result = await request;
  console.log("result.value", result);
};

// TODO: Add logic for a method that gets all the content from the database

export const getDb = async (e) => {

  const contDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  return result?.value;

};

initdb();
