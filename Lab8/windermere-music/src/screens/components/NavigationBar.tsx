import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from '../../images/icon.png';
import { useTranslation } from 'react-i18next';

export default function NavigationBar() {

    const { t, i18n } = useTranslation();

    const selectEnglishLanguage = () => {
        i18n.changeLanguage("en");
    }

    const selectFrenchLanguage = () => {
        i18n.changeLanguage("fr");
    }

    const navigate = useNavigate();

    const navigateToHomepage = () => {
        navigate('/');
    }

    return (
        <Navbar bg="light" expand="lg" style={{ padding: '0px 15px 0px 15px' }}>
            <Navbar.Brand href="">
                <img
                    src={logo}
                    alt='Windemere Music Club'
                    height={45}
                    onClick={navigateToHomepage}
                    style={{ cursor: 'pointer' }}
                />
                <span className='p-3' style={{ fontFamily: 'Brush Script MT', fontSize: '35px' }}>Windermere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ marginLeft: 'auto', fontSize: '18px' }}>
                    <Nav.Link href="/">{t('navbarHome')}</Nav.Link>
                    <Nav.Link href="activities">{t('navbarActivites')}</Nav.Link>
                    <Nav.Link href="booking">{t('navbarBooking')}</Nav.Link>
                    <Nav.Link href="team">{t('navbarTeam')}</Nav.Link>
                    <Nav.Link href="register">{t('navbarRegister')}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button
                key="english"
                onClick={selectEnglishLanguage}
                active={i18n.language.startsWith("en")}
            >
                EN
            </Button>
            <Button
                key="french"
                onClick={selectFrenchLanguage}
                active={i18n.language.startsWith("fr")}
            >
                FR
            </Button>
        </Navbar>
    )
}
