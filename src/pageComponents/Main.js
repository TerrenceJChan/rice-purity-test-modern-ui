import Layout from "../components/Layout"

const Main = () => {
    return (
        <Layout>
            <div className="grid gap-y-2">
                <p>Originally taken from <a href="http://ricepuritytest.com/" target="_blank" rel="noreferrer">The Rice Purity Test website</a>, this is a quick and easy 100-question test to see how &ldquo;pure&rdquo; a person is relative to the amount of &ldquo;vices&rdquo; a person has partaken in.</p>
                <p>This test is supposedly used during O-week at Rice University as an ice-breaker, though at this point, who knows where it originates from. Regardless, it&apos;s a fun activity to do with your friends and perhaps it can be an inspiration for questions when you play &ldquo;Never Have I Ever&rdquo;.</p>
                <hr />
                <p><span className="font-bold">Instructions:</span> Simply check off every listed act that you&apos;ve done. Each check will reduct your score from 100.</p>
            </div>
        </Layout>
    )
}

export default Main