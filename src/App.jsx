import {
  Header,
  Hero,
  Clients,
  Community,
  CaseStudy,
  Impact,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="h-6 md:h-10" />
      <Clients />
      <div className="h-6 md:h-10" />
      <Community />
      <div className="h-6 md:h-10" />
      <CaseStudy />
      <div className="h-6 md:h-10" />
      <Impact />
    </div>
  );
}
