import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-nowrap justify-between items-center p-4">
      <div className="font-bold">CoreFlix</div>
      <div>
        <button type="button">Sign In</button>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl font-bold text-center">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl font-bold text-center">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="text-2xl font-bold text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form>
          <input type="email" />
          <button type="button">Get Started!</button>
        </form>
      </div>
    </>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
