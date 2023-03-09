import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({ movie: toString(movie.id) }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl">
        <div className="flex gap-6 items-center">
          <h2 className="text-3xl mb-3">{res.title}</h2>
          <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
            {res.status}
          </h2>
        </div>
        <h2 className="text-lg">Release Date: {res.release_date}</h2>
        <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
        <h2 className="text-lg mb-4">
          Overall rating: {Math.round(res.vote_average)} / 10
        </h2>
        <p className="text-lg leading-8 mb-5">{res.overview}</p>
        <Image
          className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
}
