
import "@styles/globle.css"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
export const metadata = {
    title: "posta",
    description:'Discover and Share AI Prompts'
}

const RootLayout = ({children}) => {
    return (
        //wrap your content inside html tag and provide a link tag lang="en"
        <html lang="en">
            <body>
                <Provider>
                <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
                </Provider>
            </body>

        </html>
    )
}

export default RootLayout
