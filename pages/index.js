import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = 'Bem vindo ao AluraTubil';
    const estiloDaHomePage = { 
        // backgroundColor: 'red' 
    };

    // console.log(config.playlists);

    return (
        <>
        <CSSReset />
        <div style={estiloDaHomePage}>
            {/* {mensagem} */}
            <Menu />
            <Header />
            <Timeline playlists={config.playlists}>
                Conteúdo
            </Timeline>
        </div>
        </>
    );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">

                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    // console.log('Dentro do componente', propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);

    return (
        // <div>
        //     {/* {playlistNames.map(function(playlistName){ function pode ser substituído pela flecha => */}
        //     {/* ao invés de for e foreach vamos sempre usar o map */}
        //     {/* control shift p, digitar format document e vuala formata o documento */}
        //     {playlistNames.map((playlistName) => {
        //         const videos = propriedades.playlists[playlistName];
        //         console.log(videos);
        //         return playlistName;
        //     })}
        // </div>
        <StyledTimeline>
        {playlistNames.map((playlistName) => {
            const videos = propriedades.playlists[playlistName];
            console.log(playlistName);
            console.log(videos);
            return (
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.map((video) => {
                            return (
                                <a href={video.url}>
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })}
    </StyledTimeline>
    )
}