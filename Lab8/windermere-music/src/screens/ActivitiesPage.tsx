import NavigationBar from './components/NavigationBar';
import Activity from './components/Activity';
import Footer from './components/Footer';

const ActivitesPage = () => {

    const activities = [
        {
            name: "Music Appreciation Sessions",
            description: "Music Appreciation Sessions are designed to deepen the students’ understanding and appreciation of various genres, artists, and musical movements. These sessions provide a platform for music enthusiasts of all levels to come together, listen to diverse selections of music, and discuss their insights and interpretations in a welcoming and inclusive environment. Each session takes place on Wednesday evenings and each week focuses on a specific musical genre/movement or artist.Through guided listening exercises and lively discussions, attendees gain valuable insights into the historical, cultural, and artistic significance of the featured music and artist.",
            image_source: require('../images/music_appreciation.png')
        },
        {
            name: "Music Workshops",
            description: "Music Workshops are dynamic and hands-on sessions, on Monday and Thursday evenings, aimed at fostering musical growth, skill development, and creative exploration among students. These workshops provide a supportive environment for participants to enhance their musical talents, learn new techniques, and collaborate with fellow musicians. Each workshop is tailored to cater to a specific aspect of music, ranging from instrumental mastery and vocal techniques to songwriting, music production, and improvisation. Led by the most experienced students and a few volunteer professors, these sessions offer valuable insights, practical exercises, and personalized feedback to help attendees hone their craft and unleash their artistic potential.In addition, we sometimes have guest speakers come to those workshops to share their experience with the students.",
            image_source: require('../images/workshops.png')
        },
        {
            name: "Concerts/Events",
            description: "The Windermere Music club hosts performances on campus to help students showcase their talent and artistry with the community. These events, ranging from intimate acoustic sets to electrifying ensemble performances, foster a sense of belonging and celebrate the diverse musical talents thriving within the university. Simultaneously, the club also arranges outings for students to attend concerts and events outside of the university. Club members can immerse themselves in the broader music community, experience live performances, and draw inspiration from professional musicians and artists. From local gigs and live orchestra performances to major concerts and music festivals, the club curates a diverse calendar of events, ensuring there's something for every musical taste and interest. The goal of this is not only about enjoying live music, but it's also about fostering a sense of camaraderie, sharing unforgettable experiences, and creating lasting memories with fellow music enthusiasts.",
            image_source: require('../images/concerts.png')
        },
        {
            name: "Games/Karaoke Night",
            description: "Games/Karaoke night is a fun-filled night of entertainment and camaraderie that takes place every last Friday night of the month. The event features a variety of engaging games, from music-themed trivia challenges to interactive group activities and friendly competition. Additionally, the highlight of the night is the karaoke session, where students take the stage to sing their favorite tunes, ranging from classic hits to contemporary chart-toppers. Games/Karaoke night promises an unforgettable experience filled with laughter, music, and unforgettable memories.",
            image_source: require('../images/karaoke.png')
        },
        {
            name: "Book a room",
            description: "The club provides the option for their members to book dedicated spaces for them to practice their musical instruments or vocals. Whether collaborating with friends or seeking solitude for focused practice, students have the opportunity to book rooms tailored to their needs. These rooms are equipped with essential amenities, such as soundproofing and basic equipment, to facilitate productive and immersive practice sessions. Students have the resources and environment necessary to nurture their musical talents.",
            image_source: require('../images/book_room.png')
        },
    ]

    return (
        <div>
            <NavigationBar />
            <h2 className='text-center pt-4'>
                Club Activities
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