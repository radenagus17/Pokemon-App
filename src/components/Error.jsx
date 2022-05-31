const ErrorPage = ({ page, message }) => {
  return <>{page === "form" ? <h3 style={{ color: "red" }}>{message}</h3> : <h1>Error</h1>}</>;
};

export default ErrorPage;
