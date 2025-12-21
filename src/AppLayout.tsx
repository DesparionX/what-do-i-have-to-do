import "./AppLayout.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

export default function AppLayout() {
  return (
    <main className="min-h-dvh flex flex-col app-layout">
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
