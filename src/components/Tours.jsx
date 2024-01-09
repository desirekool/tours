import Tour from './Tour'
const Tours = ({ data }) => {
    return (
        <>
            <section>
                {data.map(tour => <Tour key={tour.id} {...tour} />)}
            </section>
        </>
    );
};

export default Tours;