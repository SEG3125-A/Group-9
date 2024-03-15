import React from 'react';
import NavigationBar from './components/NavigationBar';
import Activity from './components/Activity';

const ActivitesPage = () => {

    const activities = [
        {
            name: "Music Appreciation Sessions",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Mauris pharetra et ultrices neque. Vulputate mi sit amet mauris commodo. Libero enim sed faucibus turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed risus ultricies tristique nulla aliquet enim tortor at. Magna fringilla urna porttitor rhoncus dolor purus non enim. Nibh nisl condimentum id venenatis a. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt.",
            image_source: require('../images/music_appreciation.png')
        },
        {
            name: "Music Workshops",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Mauris pharetra et ultrices neque. Vulputate mi sit amet mauris commodo. Libero enim sed faucibus turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed risus ultricies tristique nulla aliquet enim tortor at. Magna fringilla urna porttitor rhoncus dolor purus non enim. Nibh nisl condimentum id venenatis a. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt.",
            image_source: require('../images/workshops.png')
        },
        {
            name: "Concerts/Events",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Mauris pharetra et ultrices neque. Vulputate mi sit amet mauris commodo. Libero enim sed faucibus turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed risus ultricies tristique nulla aliquet enim tortor at. Magna fringilla urna porttitor rhoncus dolor purus non enim. Nibh nisl condimentum id venenatis a. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt.",
            image_source: require('../images/concerts.png')
        },
        {
            name: "Games Night/Karaoke",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Mauris pharetra et ultrices neque. Vulputate mi sit amet mauris commodo. Libero enim sed faucibus turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed risus ultricies tristique nulla aliquet enim tortor at. Magna fringilla urna porttitor rhoncus dolor purus non enim. Nibh nisl condimentum id venenatis a. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt.",
            image_source: require('../images/karaoke.png')
        },
        {
            name: "Book a room",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae. Mauris pharetra et ultrices neque. Vulputate mi sit amet mauris commodo. Libero enim sed faucibus turpis in eu mi bibendum neque. Nibh venenatis cras sed felis eget velit aliquet sagittis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Sed risus ultricies tristique nulla aliquet enim tortor at. Magna fringilla urna porttitor rhoncus dolor purus non enim. Nibh nisl condimentum id venenatis a. Velit scelerisque in dictum non consectetur a erat nam. Velit sed ullamcorper morbi tincidunt.",
            image_source: require('../images/book_room.png')
        },
    ]

    return (
        <div>
            <NavigationBar />
            <h2 className='text-center pt-4'>
                Club Activities
            </h2>
            <div>
                {activities.map((activity, index) => (
                    <Activity
                        name={activity.name}
                        description={activity.description}
                        image={activity.image_source}
                        imagePosition={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>

        </div>
    )

}

export default ActivitesPage;