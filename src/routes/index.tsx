import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>LJN-portfolio</Title>
      <h1>Hello! This is my portfolio</h1>
      <Counter />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2482193245390022"
     crossorigin="anonymous"></script>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        copyright2023.
      </p>
    </main>
  );
}
