import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='logo'>
                <h2>Designer</h2>
            </div>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <button className='contact'>Contact</button>
            </div>
        </div>
    )
}

export default Header;