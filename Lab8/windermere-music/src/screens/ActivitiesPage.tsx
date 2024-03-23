import NavigationBar from './components/NavigationBar';
import Activity from './components/Activity';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const ActivitesPage = () => {

    const { t } = useTranslation();

    const activities = [
        {
            name: t('activities.musicAppreciationSessions.name'),
            description: t('activities.musicAppreciationSessions.description'),
            image_source: require('../images/music_appreciation.png')
        },
        {
            name: t('activities.musicWorkshops.name'),
            description: t('activities.musicWorkshops.description'),
            image_source: require('../images/workshops.png')
        },
        {
            name: t('activities.concertsEvents.name'),
            description: t('activities.concertsEvents.description'),
            image_source: require('../images/concerts.png')
        },
        {
            name: t('activities.gamesKaraokeNight.name'),
            description: t('activities.gamesKaraokeNight.description'),
            image_source: require('../images/karaoke.png')
        },
        {
            name: t('activities.bookARoom.name'),
            description: t('activities.bookARoom.description'),
            image_source: require('../images/book_room.png')
        },
    ]

    return (
        <div>
            <NavigationBar />
            <h2 className='text-center pt-4'>
                {t('activities.title')}
            </h2>
            <div className='px-4'>
                {activities.map((activity, index) => (
                    <Activity
                        name={activity.name}
                        description={activity.description}
                        image={activity.image_source}
                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )

}

export default ActivitesPage;