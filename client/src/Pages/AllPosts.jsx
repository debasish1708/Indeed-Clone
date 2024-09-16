
import Header from "../components/Header";
import { useEffect,useState } from "react";
import { getAllPosts } from "../services/api";
import { Box,Card,CardContent,Typography,InputBase,styled } from "@mui/material";

const SearchWrapper = styled(Box)({
    marginTop: 74,
    display: 'flex',
    justifyContent: 'center',
    '& > div':{
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
        paddingLeft: 10
    }
})

const PostWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    flexWrap: 'wrap',
    '& > div':{
        border: '1px solid #442d0',
        borderRadius: 10,
        margin: 10,
        width: '30%',
        height: 300
    }
})

const AllPosts = () => {
    const[posts,setPosts]=useState([]);

    const[text,setText]=useState("");

    useEffect(()=>{
        const getData= async () => {
            const response =await getAllPosts();
            console.log(response.data)
            setPosts(response.data);
        }
        getData();
    }, [])

    return (
       <>
            <Header />
            <SearchWrapper>
                <InputBase 
                    placeholder="Search by Job Title"
                    onChange={(e) => setText(e.target.value)}
                />
            </SearchWrapper>
            
            <PostWrapper>
               { posts.filter(post=>post.profile.toLowerCase().includes(text.toLowerCase())).map(post =><Card>
                            <CardContent>
                                <Typography variant="h5">{post.profile}</Typography>
                                <Typography>{post.type === "online"?"Remote":"Office"}</Typography>
                                <Typography>{post.salary}</Typography>
                                <Typography
                                    style={{color:'#6f6f6f', margin: '10px 0'}}
                                >{post.description}</Typography>
                                <Typography><b>Experience</b>: {post.experience}</Typography>
                                <Typography><b>Technology</b>: {post.technology}</Typography>
                                <Typography>{post.description}</Typography>
                            </CardContent>
                        </Card>)}
            </PostWrapper>

       </>
    )
}

export default AllPosts;