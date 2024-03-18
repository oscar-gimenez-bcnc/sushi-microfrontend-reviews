import Header from "./components/Header";
import Review from "./components/Review";

async function getData() {
  const endpoint = "https://65f824bab4f842e808870992.mockapi.io/api/v1/review";
  const res = await fetch(endpoint);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const review = data[0]; //FIXME:
  console.log(review);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <Header />
      <Review review={review} />
    </main>
  );
}
