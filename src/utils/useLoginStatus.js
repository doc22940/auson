import * as firebase from "firebase/app";
import { useState, useEffect } from "react";

import allowedEmails from "../allowedEmails.json";

export default function useLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null && allowedEmails[user.email]) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  return isLoggedIn;
}
