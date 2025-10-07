import Header from '../components/header';
import Footer from '../components/footer';
import VideoEmbed from '../components/video';

export default function About() {
  const studentNumber = "12345678";
  const studentName = "VincentRW";
  return (
    <div>
      <Header studentNumber={studentNumber} />
      <main style={{ padding: 32 }}>
        <h1>About</h1>
        <p>Name: {studentName}</p>
        <p>Student Number: {studentNumber}</p>
        <VideoEmbed videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID" />
      </main>
      <Footer name={studentName} studentNumber={studentNumber} />
    </div>
  );
}