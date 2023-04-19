import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApsdhrQL1iZV6zbDJAo0rDR79_vS3cRxY",
  authDomain: "react-51175.firebaseapp.com",
  projectId: "react-51175",
  storageBucket: "react-51175.appspot.com",
  messagingSenderId: "231162604814",
  appId: "1:231162604814:web:cb78c59befc7addaa9fb5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getItems(){
    const ItemsRef = collection(db, "items");
    const ItemsSnap = await getDocs(ItemsRef);
    const documents = ItemsSnap.docs;

    const DocsData = documents.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });

    return DocsData;
    
}

export async function getSingleItem(idURL){
  const docRef = doc(db, "items", idURL);

  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data()};
}

export async function getItemsByCategory(categoryid) {

  const itemsRef = collection(db, "items")
  const q =  query(itemsRef, where ("categoryId", "==", categoryid ));

  const itemsSnap = await getDocs(q);
  const documents = itemsSnap.docs;

  const docsData = documents.map((doc) =>{
    return {id: doc.id, ...doc.data()};
  })

  return docsData;
}

export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders");
  const orderWithDefaultState = { ...order, estado: "generada" };
  const response = await addDoc(collectionOrdersRef, orderWithDefaultState)
  return response.id;
}