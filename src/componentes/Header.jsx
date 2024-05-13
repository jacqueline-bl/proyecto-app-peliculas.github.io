function Header (){
    
    return(
        <div className="header">
            <div className='logo'>
                <img  className="logo-img"       
                    src={process.env.PUBLIC_URL + "/logo-pelicam.png"}
                    
                    alt="Logo del sitio Pelicam" />
        
        </div>

        {/* <div className='nombreApp'>
            <h2>PELIcam</h2>
        </div> */}

        <nav className='menu'>
            <ul className="ulMenu">
            <li><a href="GetMovies"  target="_blank" rel="noopener noreferrer">Inicio</a></li>
            <li><a href="Search"  target="_blank" rel="noopener noreferrer">Buscar</a></li>

            </ul>
        </nav>

    </div>    
        
    )
}

export default Header;