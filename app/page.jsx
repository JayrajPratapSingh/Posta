// This file will render our home page
import Feed from "@components/Feed"
const Home = () => {
    return (
        <section className="w-full flex-center flex-col ">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Thoughts it's Free</span>
            </h1>
            <p className="desc text-center">
                Posta is an open-source AI prompting tool for modern world to descover, create and share creative thoughts.
            </p>

            {/** Feed */}
            <Feed />

        </section>
    )
}

export default Home
