import React from 'react'
import VideosRow from '../../Main/VideosRow'
import './HomeContent.css'
const HomeContent = () => {
    const recommendedVideos = [
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "How To Make A Responsive Coffee Shop Website Design Using HTML -",
            length: 208,
            channel: {
                name: "Mr. web Designer",
                link: "https://www.youtube.com/watch?v=TVFu4-Kd4oM",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 9777,
            uploadedAt: "2022-03-19"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "HTML & CSS Full Course - Beginner to Pro...",
            length: 208,
            channel: {
                name: "Tesla Company",
                link: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 3800000,
            uploadedAt: "2022-02-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)",
            length: 208,
            channel: {
                name: "Clever Programmer",
                link: "https://www.youtube.com/watch?v=lI1ae4REbFM",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 827000,
            uploadedAt: "2022-08-01"
        },
    ]

    const channelVideos = [
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "PedroTech",
            length: 208,
            channel: {
                name: "React Course For Beginners - learn React in 8Hours",
                link: "https://www.youtube.com/watch?v=f55qeKGgB_M",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 1760000,
            uploadedAt: "2022-11-01"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Things to stop doing in your 20s *elevate yourself*",
            length: 208,
            channel: {
                name: "Jessica edu",
                link: "https://www.youtube.com/watch?v=PSskBEvKj10",
                // image: "https://picsum.photos/30/30"
            },
            viewCount: 337000,
            uploadedAt: "2023-03-08"
        },
        {
            thumbnail: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/150`,
            title: "Voter suppression Lagosians recount experiences",
            length: 208,
            channel: {
                name: "Guardian Nigeria",
                link: "https://www.youtube.com/watch?v=-k-1YhmshIw",
                image: "https://picsum.photos/30/30"
            },
            viewCount: 5100000,
            uploadedAt: "2023-03-19"
        },
    ]

    const marqChan = {
        name: "Marques Brownlee",
        link: "https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g",
        image: "https://picsum.photos/30/30"
    }
    return (
        <div className="home-content">
            <VideosRow 
                type= "normal"
                label= "Recommended"
                videos= {recommendedVideos}
            />

            <VideosRow
                type= "channel"
                channel= {marqChan}
                videos= {channelVideos} />
        </div>
    )
}

export default HomeContent