import DefineSeperator from '../../components/seperator/seperator';
import SponsorItem from './sponsorItem';

var data = [
    { imageKey: 'Devfolio', imagePath: 'Devfolio.svg', URL: 'https://www.devfolio.co/', type: 'platinum' },
    { imageKey: 'Polygon', imagePath: 'Polygon.svg', URL: 'https://polygon.technology/', type: 'platinum' },
    { imageKey: 'GitHub', imagePath: 'GitHub.svg', URL: 'https://www.github.com', type: 'gold' },
    { imageKey: 'Replit', imagePath: 'Replit.png', URL: 'https://replit.com/', type: 'gold' },
    { imageKey: 'Solana', imagePath: 'Solana.svg', URL: 'https://solana.com/', type: 'gold' },
    { imageKey: 'Filecoin', imagePath: 'Filecoin.svg', URL: 'https://filecoin.io/', type: 'gold' },
    { imageKey: 'Wolfram', imagePath: 'Wolfram.svg', URL: 'https://www.wolfram.com/', type: 'gold' },
    { imageKey: 'Echo3D', imagePath: 'echo3D.png', URL: 'https://www.echo3d.co/', type: 'gold' },
    { imageKey: 'Voiceflow', imagePath: 'voiceflow.png', URL: 'https://www.voiceflow.com/', type: 'gold' },
    { imageKey: 'FossUnited', imagePath: 'FOSSUnited.svg', URL: 'https://fossunited.org', type: 'silver' },
    { imageKey: 'Taskade', imagePath: 'taskade.svg', URL: 'https://www.taskade.com/', type: 'silver' },
    {
        imageKey: 'InterviewCake',
        URL: 'https://www.interviewcake.com/',
        imagePath: 'interviewCake.svg',
        type: 'educational',
    },

    {
        imageKey: `O'Reilly Media`,
        imagePath: 'ORM.svg',
        URL: 'https://www.oreilly.com/',
        type: 'gold',
    },
    {
        imageKey: 'Axure',
        imagePath: 'Axure.svg',
        URL: 'https://www.axure.com/',
        type: 'gold',
    },
    {
        imageKey: 'Werb',
        imagePath: 'werb.svg',
        URL: 'https://attendo-gcp.web.app/',
        type: 'technical',
    },
    {
        imageKey: 'Protopie',
        imagePath: 'protopie.svg',
        URL: 'https://www.protopie.io/',
        type: 'gold',
    },
    {
        imageKey: 'Give My Certificate',
        // imagePath: 'werb.svg', //TODO: Change Logo
        URL: 'https://givemycertificate.com/',
        type: 'education',
    },
    {
        imageKey: 'ClusterDev',
        imagePath: 'clusterdev-logo.svg',
        URL: 'https://clusterdev.com/',
        type: 'title',
    },
    {
        imageKey: 'Balsamiq',
        imagePath: 'balsamiq.png',
        URL: 'https://balsamiq.com/',
        type: 'educational',
    },
    {
        imageKey: 'UST Global',
        imagePath: 'ust.png',
        URL: 'https://www.ust.com/',
        type: 'platinum',
    },
    {
        imageKey: 'TinkerHub',
        imagePath: 'tinkerhub.png',
        URL: 'https://tinkerhub.org/',
        type: 'community',
    },
    {
        imageKey: 'GTech Mulearn',
        imagePath: 'µLearn.png',
        URL: 'https://mulearn.org/',
        type: 'community',
    },
    {
        imageKey: 'GDSC MBCET',
        imagePath: 'gdsc_logo.svg',
        URL: 'https://gdscmbcet.com/',
        type: 'community',
    },
    {
        imageKey: 'csi',
        imagePath: 'csi.jpg',
        URL: 'https://mbcet.ac.in/home/professional-socities/computer-society-of-india/',
        type: 'community',
    },
    {
        imageKey: 'ieeembcet',
        imagePath: 'ieeembcet.png',
        URL: 'https://www.ieeesbmbcet.in/',
        type: 'community',
    },
    {
        imageKey: 'ietcmbcet',
        imagePath: 'ietc.jpg',
        URL: 'https://mbcet.ac.in/innovation-entrepreneurship/iedc-innovation-entrepreneurship-development-centre/',
        type: 'community',
    },
];

const precedenceOrder = ['title', 'platinum', 'gold', 'silver', 'educational', 'community', 'technical'];
const displayText = ['title', 'platinum', 'gold', 'silver', 'educational partners', 'community partners', 'technical partner'];

function DefineSponsorsList() {
    var listFull = [];

    for (const i in precedenceOrder) {
        const tempList = [];

        for (const e of data) {
            if (e.type === precedenceOrder[i]) {
                if (e.imagePath !== undefined) tempList.push(<SponsorItem key={`${e.imageKey}`} {...e}></SponsorItem>);
            }
        }

        if (tempList.length !== 0) {
            listFull.push(<h3 key={`${displayText[i]}_name`}>{displayText[i]}</h3>);
            listFull.push(<div key={`${displayText[i]}_tier`} className="sponsorTier">{tempList}</div>);
            listFull.push(<DefineSeperator key={`${displayText[i]}_seperator`} />);
        }
    }

    listFull.pop();

    return <div className="sponsorList">{listFull}</div>;
}

export default DefineSponsorsList;
