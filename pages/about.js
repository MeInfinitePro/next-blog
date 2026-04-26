import Counter from "./ui/Counter";

export default function About() {
  return (
    <div>
      About
      <Counter></Counter>
      <Page></Page>
    </div>
  );
}

export function Page() {
  return <p>This is a page</p>;
}


