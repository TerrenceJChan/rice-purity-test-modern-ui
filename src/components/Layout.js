import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="min-w-full flex justify-center">
            <div className="lg:min-w-[1024px] lg:max-w-7xl w-full min-h-screen grid grid-rows-[auto_1fr_auto] gap-y-5 justify-center">
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout