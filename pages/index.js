import Link from "../src/components/Link";

function Title({ children, as }) {
  const Tag = as;

  return (
    <>
      <Tag>
        {children}
      </Tag>
      

      <style jsx>{`
        ${Tag} {
          color: green;
          font-family: 'sans-serif';
        }
      `}</style>
    </>
  );
}

export default function HomePage(){
  return (
    <div>
      <Title as="h2">Alura Cases - Home Page</Title>
      <Link href="/faq">
        ir para FAQ
      </Link>
    </div>
  );
}