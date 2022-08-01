const Layout = ({ children }) => {
    return (
        <div className="flex justify-center">
            <div className="lg:min-w-[1024px] lg:max-w-7xl w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout