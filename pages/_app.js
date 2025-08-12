// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";

const doctor = {
  name: "Dr. Amjad Ali",
  title: "Homeopathic Specialist & Owner",
  hospital: "Mualij Homeopathic Hospital",
  email: "rjamjadali@gmail.com",
  phone: "0314 9660574",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout doctor={doctor}>
      <Component {...pageProps} />
    </Layout>
  );
}
