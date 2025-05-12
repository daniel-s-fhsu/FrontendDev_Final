import FormHeader from "./form/FormHeader";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../UserContext";
import { useState, useEffect } from "react";

function PurchaseHistory() {
    const {user} = UserAuth();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            if (!user || !user.email) return;

            try {
                const purchaseQuery = query(
                    collection(db, "purchases"),
                    where("user", "==", user.email),
                    orderBy("timestamp", "desc")
                );

                const snapshot = await getDocs(purchaseQuery);
                const data = snapshot.docs.map((doc) => {
                    const docData = doc.data();
                    return {
                      key: doc.id,
                      name: docData.name,
                      date: docData.date,
                      quantity: docData.quantity,
                      price: docData.price,
                      timestamp: docData.timestamp, // May be a Firestore Timestamp or a string
                    };
                  });
                  

                setPurchases(data);
                console.log(purchases);
            } catch (err) {
                console.log("Failed to fetch purchase history: ", err);
            }
        }

        fetchPurchases();
    }, [user]);


    return (
        <div className="my-5">
          <FormHeader title="Purchase History" />
          {purchases.length === 0 ? (
            <p className="text-gray-400 italic px-5">Your purchase history is empty!</p>
          ) : (
            <div className="space-y-4 px-5">
              {purchases.map((purchase) => (
                <div
                  key={purchase.key}
                  className="rounded border border-gray-200 shadow-sm p-4 bg-gray-100"
                >
                  <p className="text-lg font-semibold text-blue-700">{purchase.name}</p>
                  <p className="text-sm text-gray-700">Event date: {purchase.date}</p>
                  <p className="text-sm text-gray-700">Quantity bought: {purchase.quantity}</p>
                  <p className="text-sm text-gray-500">
                    Purchase timestamp:{" "}
                    {purchase.timestamp?.toDate
                      ? purchase.timestamp.toDate().toLocaleString()
                      : new Date(purchase.timestamp).toLocaleString()}
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    Cost of tickets: ${Number(purchase.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
      
}

export default PurchaseHistory;