import Nav from 'react-bootstrap/Nav'

let navBarElements = ["Inicio", "Productos", "Contacto"]

function NavBarItems() {
    return (
        navBarElements.map((element, index) => <Nav.Link key={index} href={element}>{element}</Nav.Link>)
    )
}

export default NavBarItems