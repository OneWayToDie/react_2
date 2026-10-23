import './Nav.css';

function Nav(props)
{
    console.log(props);
    return(
        <nav>
            <ul>
                {
                    Object.keys(props.navigation).map
                    (
                        elem =>
                        {
                            //console.log(props.navigation[elem]);
                            console.log(elem);
                            return( 
                                <li key={elem}>
                                    <a href={props.navigation[elem]}>
                                        {elem}
                                    </a>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </nav>
    );    
}
export default Nav;