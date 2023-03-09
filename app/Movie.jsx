import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="text-md font-bold">{title}</h2>
      <h2 className="pb-3 opacity-50">
        <span className="uppercase font-light tracking-wider">Released: </span>
        {release_date}
      </h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
