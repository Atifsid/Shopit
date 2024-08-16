import Login from "./(auth)/login/page";
import Products from "./(root)/products/page";

export default function Home() {
  //TODO: create slice for this
  const isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <main>
        <Products />
      </main>
    );
  } else {
    return <Login />;
  }
}
