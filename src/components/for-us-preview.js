import React, { useEffect, useState } from "react";

import { getDownloadUrls, getContents } from "../utils/downloadPrivate";

export default function ForUsPreview() {
  const [texts, setTexts] = useState(null);

  useEffect(() => {
    getContents().then(contents => setTexts(contents));
  }, []);

  return (
    <div>
      {texts != null &&
        texts.map((text, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
    </div>
  );
}
