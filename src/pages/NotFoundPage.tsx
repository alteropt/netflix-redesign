import Header from "../components/Header";

const NotFoundPage = () => {
  return (
    <>
      <Header/>
      <div className="h-screen w-full flex flex-col items-center justify-center text-red-800">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="text-5xl font-medium">Page Not Found</h2>
      </div>
    </>
  )
}
export default NotFoundPage;
