import SearchForm from "../components/searchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container bg-[#e91e63] min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading bg-black text-white p-6 mb-6 inline-block text-4xl font-bold">
            PITCH YOUR STARTUP, <br />
            CONNECT WITH <br />
            ENTREPRENEURS
          </h1>

          <p className="sub-heading !max-w-3xl text-white text-xl mb-8">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
          </p>
          <SearchForm />
        </div>
      </section>
    </>
  );
}


