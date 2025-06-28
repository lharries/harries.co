import { Container, Card, NavBar } from "../components";

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className="mt-6 md:mt-40 pb-40">
        <Container>
          <Card>
            <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white max-w-none">
              {children}
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
