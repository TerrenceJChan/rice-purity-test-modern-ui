import Layout from "../components/Layout"
import Questionnaire from "../components/Questionnaire"

const Main = () => {
    return (
        <Layout>
            <div className="bg-white shadow-xl p-4 rounded-xl flex flex-col gap-4">
                <p className="text-center text-8xl">Please <span className="italic">do not</span> treat this as a bucket-list.</p>
                <p className="text-center">For the Kendo team ❤️</p>
            </div>
            <Questionnaire />
        </Layout>
    )
}

export default Main