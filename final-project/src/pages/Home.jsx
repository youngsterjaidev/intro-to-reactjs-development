import { Cover, Container1, Container2, Container3 } from "../assets";
import { Footer, Navbar } from "../elements";

export default () => {
  return (
    <>
      <Navbar />
      <main>
        <section
          className=" text-slate-100 w-full py-20 px-4 lg:min-h-[100vh] grid place-items-center"
          style={{
            background: `url("${Cover}") no-repeat`,
            backgroundSize: "Cover",
            backgroundColor: "#000000ba",
            backgroundBlendMode: "soft-light",
          }}
        >
          <div>
            <h1 className="text-3xl font-bold text-center lg:text-5xl py-4">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-sm font-bold text-center lg:text-2xl py-2">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="text-sm font-bold text-center lg:text-2xl py-2">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form class="flex flex-col lg:flex-row justify-center items-center py-4 gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="input py-4 px-3 lg:max-w-[300px]"
                required
                minLength={2}
              />
              <button type="button" className="btn-primary py-4 px-10 w-max">
                Get Started!
              </button>
            </form>
          </div>
        </section>
        <section className="section content-padding">
          <div className="flex-1 text-inherit text-center lg:text-left">
            <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left">
              Enjoy on you TV
            </h2>
            <p className="font-normal">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="grid place-items-center flex-1">
            <img src={Container1} alt="container image" />
          </div>
        </section>
        <section className="section content-padding">
          <div className="flex-1 text-inherit text-center lg:text-left">
            <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left">
              Watch EveryWhere
            </h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="grid place-items-center flex-1">
            <img src={Container2} alt="container image" />
          </div>
        </section>
        <section className="section content-padding">
          <div className="flex-1 text-inherit text-center lg:text-left">
            <h2 className="font-bold py-3 text-3xl lg:text-5xl text-center lg:text-left">
              Create Profile for kids
            </h2>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
          <div className="grid place-items-center flex-1">
            <img src={Container3} alt="container image" />
          </div>
        </section>
        <section className="section content-padding">
          <h1>Frequently Asked Questions</h1>
          <div></div>
          <form>
            <legend>
              Ready to watch? Enter your email to create or restart your
              membership
            </legend>
            <input type="email" className="input" placeholder="Email Address" />
            <button type="button" className="btn-primary">
              Get Started
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
