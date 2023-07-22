import './master.css'


export default function Seventhp() {
    return (
        <div className="sep col-12 d-flex flex-wrap">
            <section className='col-12 col-md-6 d-flex justify-content-xl-end justify-content-center  py-5 '>
                <figure className='col-12 col-md-11 col-lg-9  h-100'>
                    <img className='col-12 h-100' src="https://arts.usc.edu/wp-content/uploads/2021/02/arts-in-action-1-1024x683.jpg" />

                </figure>
            </section>
            <section className='col-12 col-md-6  d-flex py-5'>
                <div className='col-11 col-lg-10  p-3 d-flex flex-wrap align-content-center'>
                    <h2 className='col-12 '>Arts In Action</h2>
                    <p className='col-12 col-lg-11 '>Arts In Action supports and creates work that builds upon USC’s pledge to address society’s most pressing issues. By providing resources and funding arts projects within the university and beyond, Arts In Action inspire seeds of change in our community that make a lasting impact.</p>
                    <a href="https://artsinaction.usc.edu/">Learn more <i className="bi bi-caret-right"></i></a>

                </div>
            </section>
        </div>
    )
}