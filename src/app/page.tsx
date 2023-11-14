import MovieCard from '@/components/MovieCard';
import NavBar from '@/components/NavBar';
import Rating from '@/components/Rating';
export default function HomePage() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: '20px',
      }}
    >
      <section>
        <NavBar />
      </section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: '20px',
          paddingTop: '100px',
        }}
      >
        <MovieCard
          genre="Ciencia ficción | Acción"
          key={2}
          poster="https://i.ebayimg.com/images/g/4msAAMXQdm5Q9c9k/s-l1200.webp"
          release_date="12/11/2023"
          title="Iron Man"
          vote_average={70}
        />

        <MovieCard
          genre="Drama | Acción"
          key={1}
          poster="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
          release_date="12/11/2023"
          title="Openheimer"
          vote_average={69}
        />

        <MovieCard
          genre="Ciencia ficción | Acción"
          key={2}
          poster="https://i.ebayimg.com/images/g/4msAAMXQdm5Q9c9k/s-l1200.webp"
          release_date="12/11/2023"
          title="Iron Man"
          vote_average={39}
        />
      </section>
    </main>
  );
}
// https://i.ebayimg.com/images/g/4msAAMXQdm5Q9c9k/s-l1200.webp
