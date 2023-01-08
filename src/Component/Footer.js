const Footer = () => {
    let today = new Date();
    return (
        <footer>
            <h1>Footer{today.getFullYear()}</h1>
        </footer>
    )
}
export default Footer;