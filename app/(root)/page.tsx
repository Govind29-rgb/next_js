import SearchForm from "../components/searchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  
  return (
    <>
      
      <section className="bg-[#e91e63] min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading bg-black text-white p-6 mb-6 inline-block text-4xl font-bold tracking-wide">
            PITCH YOUR STARTUP, <br />
            CONNECT WITH <br />
            ENTREPRENEURS
          </h1>

          <p className="text-white text-xl mb-4">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>
          <SearchForm query={query} />
        </div>
      </section>
    </>
  );
}


