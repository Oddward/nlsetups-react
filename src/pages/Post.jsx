import { BookmarkIcon, ChatIcon } from "@heroicons/react/solid"
import styled from "styled-components"
import PostNavbar from "../components/PostNavbar";
import Comment from "../components/Comment"
import Avatar from "../components/leaf-components/Avatar"

const PostSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 0;
    margin-bottom: 4rem;
    gap: 4rem;

    img {
        width: 70%;
        height: auto;
        border-radius: 5px;
        margin: 0 auto;
    }
    div.container {
        width: 70%;
        max-height: 100%;
        background-color: #eee;
        padding: 1.5rem;
        border-radius: 5px;
        margin: 0 auto;
    }
`

const DescItem = styled.div`
    margin: 1rem 0;

    h2 {
        font-size: .8rem;
        color: rgba( 0, 0, 0, .34 );
    }
    span {
        font-size: 1.5rem;
        font-weight: bold;
        color: rgba( 0, 0, 0, .87 );
        font-style: italic;
    }
    p {
        font-size: 1rem;
        font-weight: bold;
        font-style: italic;
        margin: 0;
    }
`

const VLine = styled.div`
    display: flex;
    justify-content: center;

    div {
        width: 2px;
        // max-height: 100%;
        height: max-content;
        background-color: rgba( 0, 0, 0, .34 );
    }
`

const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    font-style: italic;
    font-weight: bold;
    color: rgba( 0, 0, 0, .67 );
    fill: rgba( 0, 0, 0, .67 );

    div.line {
        height: 2px;
        width: 100%;
        background-color: rgba( 0, 0, 0, .34 );
    }
    div.uploader {
        display: flex;
        flex-direction: column;

        span { white-space: nowrap; }
        small { color: rgba( 0, 0, 0, .34 ); }
    }
    div.icon-stat {
        display: flex;
        align-items: center;
        gap: 1rem;

        i {
            display: flex;
            align-items: center;
            width: 2rem;
        }
    }
`

const CommentsList = styled.div`
    width: 80%;
    margin: 4rem auto;
`

const Post = () => {
    const img = <img src="./screens/IMG_20210630_122925_849.jpg" alt="Post preview" width="200px" height="600px" />
    const h = img.clientHeight

    return(
        <>
            <PostNavbar />
            <PostSection>
                { img }
                <div className="container" style={{height: h}}>
                    <DescItem>
                        <h2>Launcher</h2>
                        <span>Niagara Launcher</span>
                    </DescItem>
                    <DescItem>
                        <h2>Wallpaper</h2>
                        <span>Pexels image</span>
                    </DescItem>
                    <DescItem>
                        <h2>Icons</h2>
                        <span>Ashe icon pack</span>
                    </DescItem>
                    <DescItem>
                        <h2>Description</h2>
                        <p>A clean & soothing design inspired by the photo.</p>
                    </DescItem>
                    <VLine><div></div></VLine>
                </div>
            </PostSection>

            <PostInfo>
                <div className="line"></div>
                <Avatar small src="./avatars/pfp1.jpg" />
                <div className="uploader">
                        <span>Oddward G</span>
                        <small>@oddward</small>
                </div>
                <div className="line"></div>
                <div className="icon-stat">
                    <i><BookmarkIcon /></i>
                    <span>69</span>    
                </div>
                <div className="icon-stat">
                    <i><ChatIcon /></i>
                    <span>3</span>    
                </div>
                <div className="line"></div>
            </PostInfo>

            <CommentsList>
                <Comment 
                    pfp="./avatars/pfp1_alt.jpg"
                    name="Potato" 
                    tag="@crisps" 
                    msg="Nice work, I like the emotional vibe 🔥" 
                    date="Mar 9, 2022" />
            </CommentsList>
        </>
    )
}

export default Post
