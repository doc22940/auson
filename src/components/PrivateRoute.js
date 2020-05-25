import BlogPost from "../templates/blog-post";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

import useLoginStatus from "../utils/useLoginStatus";
import { getPrivateArticle } from "../utils/getPrivate";
import { navigate } from "gatsby";

const PrivateRoute = ({ location }) => {
  const name = location.pathname.split("/private/")[1];
  const isLoggedIn = useLoginStatus();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isLoggedIn === false && location.pathname !== `/`) {
      navigate("/");
      return null;
    } else if (isLoggedIn === true) {
      getPrivateArticle(name).then(data => setData(data));
    }
  });

  return (
    <div>
      {data ? (
        <BlogPost data={data} />
      ) : (
        <Layout>
          <p>Loading...</p>
        </Layout>
      )}
    </div>
  );
};

export default PrivateRoute;
