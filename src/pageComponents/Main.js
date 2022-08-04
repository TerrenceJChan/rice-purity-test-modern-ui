import Layout from "../components/Layout"
import Questionnaire from "../components/Questionnaire"

const Main = () => {
    return (
        <Layout>
            <div className="bg-white shadow-xl p-4 rounded-xl flex flex-col gap-4">
                <p className="text-center text-8xl"><span className="text-purple-800 font-bold">TRISHA</span>, THIS IS <span className="font-bold">NOT</span> A BUCKET-LIST</p>
            </div>
            <Questionnaire />
        </Layout>
    )
}

export default Main