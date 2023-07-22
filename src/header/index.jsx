import './master.css'
import logo from '../img/logo.jpg'


export default function Header() {
    function tap(){
        document.getElementById('search').style.zIndex='1'
        document.getElementById('search').style.bottom='-44px'
        document.querySelector('#search>input').setAttribute("autoFocus","autoFocus")
        // document.getElementById('search').classList.add('show')
    }
    function close(){
        document.getElementById('search').style.zIndex='-1'
        document.getElementById('search').style.bottom='0'
    }
    return (
        <div className="header col-12 d-flex flex-wrap">
            <section className='col-3 m-0 p-0'>
                <figure className='col-12 d-flex  justify-content-end align-items-center p-2'>
                    <img className='col-12 col-sm-10 col-md-8 col-lg-5' src={logo} alt="usc" />
                </figure>
            </section>
            <section className='col-9'>
                <p className='col-12 ps-3 mt-3'>arts</p>
            </section>
            <section className='col-12 col-md-12 d-flex justify-content-center'>
                <div className='col-12 col-lg-10 d-flex justify-content-end align-items-center'>
                    <i onClick={tap} className="bi bi-search pe-2 pe-lg-0"></i>
                    <section id='search' className='col-12 d-flex justify-content-start justify-content-lg-center'>
                        <input className='col-11 col-lg-10' type="text" placeholder='Search...' />
                        <div className='d-felx align-items-center p-2 col-1'>
                            <i onClick={close} className="bi bi-x-lg"></i>
                        </div>

                    </section>

                </div>
            </section>

        </div>
    )
}