import Hero from "./components/Hero";
import HeroCanvas from "./components/HeroCanvas";
import Nav from "./components/Nav";
import Work from "./components/Work";

export default function Home() {
	return (
    <main className="h-full">
      <Nav />
			<Hero />
			<HeroCanvas />
			<Work />
		</main>
	);
}
