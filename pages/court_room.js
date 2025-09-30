import Header from '../components/header';
import Footer from '../components/footer';

export default function CourtRoom() {
  return (
    <div>
      <Header studentNumber="12345678" />
      <main style={{ padding: 32 }}>
        <h1>Escape Room</h1>
        <p>Coming soon!</p>
      </main>
      <Footer name="VincentRW" studentNumber="12345678" />
    </div>
  );
}