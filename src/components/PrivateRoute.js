import BlogPost from "../templates/blog-post";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

import useLoginStatus from "../utils/useLoginStatus";
import { getPrivateArticle } from "../utils/getPrivate";
import { navigate } from "gatsby";

const PrivateRoute = ({ location }) => {
  const name = location.pathname.split("/private/")[1];
  const isLoggedIn = useLoginStatus();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isLoggedIn === false && location.pathname !== `/404`) {
      navigate("/404");
    } else if (isLoggedIn === true) {
      getPrivateArticle(name)
        .then(data => setData(data))
        .catch(() => navigate("/404"));
    }
  });

  if (data) {
    return <BlogPost data={data} />;
  } else if (isLoggedIn === null) {
    return (
      <Layout>
        <p>
          This page requires you to be signed in. Sign in{" "}
          <Link to="/#for-us">here</Link>.
        </p>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }
};

export default PrivateRoute;
