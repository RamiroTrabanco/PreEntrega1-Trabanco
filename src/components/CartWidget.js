import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget () {
    return(<>
        <Button variant="primary">
        <FontAwesomeIcon icon={ faCartShopping } style={{"width": "27px", "height": "27px"}}/>
        <Badge bg="danger">5</Badge>
        </Button>
        </>
    )
}

export default CartWidget