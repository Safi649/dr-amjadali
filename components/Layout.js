import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, doctor }) {
  return (
    <>
      <Header doctor={doctor} />
      <main>{children}</main>
      <Footer doctor={doctor} />
    </>
  );
}
