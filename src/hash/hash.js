import HashHero from './hero/hero';
import HashAbout from './about/about';
import './hash.css';

function Hash() {
    return (
        <div className="Hash">
            <HashHero></HashHero>
            {/* <HashAbout></HashAbout>
            <HashHero></HashHero>; */}
        </div>
    );
}

export default Hash;