import axios from "axios";
import { getSession, signIn, useSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Signin.module.css";

const signin = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  // const {session, loading} = useSession();
  const router = useRouter();
  // if (!loading && session) {
  //   console.log(router.query);
  //   const redirect = router.query.callbackUrl || "/";
  //   router.push(redirect);
  // }

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        const redirect = router.query.callbackUrl || "/";
        router.push(redirect);
      }
    };

    securePage();
  }, []);
  
  const onSubmit = async () => {

    //  const result = await signIn("credentials", {
    //    username,
    //    password,
    //    redirect: true,
    //    callbackUrl: "/",
    //  });

    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign in</h1>
      <div className={styles.signinProviders}>
        <div className={styles.wrapper}>
          <input
            placeholder="username"
            className={styles.input}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={onSubmit} className={styles.button}>
            Sign In
          </button>
          {/* {error && <span className={styles.error}>Wrong Credentials!</span>} */}
        </div>
        <div className={styles.orSeparator}>
          <span>Or</span>
        </div>
        <div className={styles.wrapper}>
          <button
            className={styles.githubBtn}
            onClick={() =>
              signIn("github", { redirect: router.query.redirect })
            }
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default signin;
