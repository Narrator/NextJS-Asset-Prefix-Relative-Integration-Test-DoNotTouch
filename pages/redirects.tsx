import { useRouter } from "next/router";

export default function Redirects() {
  const { pathname, query } = useRouter();
  return (
    <>
      <div>Path={pathname}</div>
      <div>Query={query.q}</div>
    </>
  );
}
