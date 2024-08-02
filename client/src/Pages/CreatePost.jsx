

import { useState } from "react";
import Header from "../components/Header";
import { Box,Typography,styled,TextField,Button } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../Routes/route";

const Component=styled(Box)({
    padding: '80px 200px',
    background:'#F5F5F5',
})
const Container=styled(Box)({
    display:'flex',
    background: '#FFFFFF',
    borderRadius:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '&>p':{
        fontSize:35,
        fontWeight: 700,
        opacity: '.7',
    }
})
const FormWrapper=styled(Box)({
    display:'flex',
    flexDirection:'column',
    marginTop:20,
    padding:20,
    background:'#FFFFFF',
    '&>*':{
        marginTop:20,
    }
})
const defaultObj={
    profile: "",
    type: "",
    description: "",
    experience: "",
    technology: [],
    salary: ""
}

const options={
    type: ["online","offline"],
    experience: ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more Years"],
    technology: ["Java", "JavaScript", "Angular", "React", "Node.js", "Docker", "AWS", "Python", "C++", 
                "C#", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript", "Go", "Rust", "Scala", "Django", "Flask", "Spring","Spring Boot", 
                "Vue.js", "Express.js", "Laravel", "Ruby on Rails", "ASP.NET", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", 
                "GraphQL", "Elasticsearch", "Kubernetes", "Terraform", "Ansible", "Chef", "Puppet", "Hadoop", "Spark", "TensorFlow", 
                "PyTorch", "Jenkins", "Git", "GitHub", "GitLab", "Bitbucket", "Azure", "Google Cloud Platform (GCP)", "Heroku"],
    salary: ["Rs 0-300000","Rs 300000-500000", "Rs 5000000-800000","Rs 800000-1300000", "Rs 1300000 and more"]
}
const CreatePost=()=>{
    const [data,setData]=useState(defaultObj);
    const navigate=useNavigate();
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
    const handleChange=(e)=>{
        setData({ ...data,[e.target.name]: e.target.value });
    }
    const saveJob=async()=>{
        await savePost(data);
        navigate(routePath.posts);
    }
    return(
        <> 
           <Header/>
           <Component>
                <Container>
                    <Typography>Crate a Job Post</Typography>
                    <img src={image} alt="create" />
                </Container>
                <FormWrapper>
                    <TextField 
                        placeholder="Job Title"
                        name="profile"
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Job type"
                        id="job-type-label"
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        options={options.type}
                    />
                    <TextField 
                        placeholder="Job Description"
                        name="description"
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Experience"
                        id="job-experience-label"
                        value={data.experience}
                        handleChange={handleChange}
                        options={options.experience}
                        name="experience"
                    />
                    <Dropdown
                        label="Technology"
                        id="job-technology-label"
                        value={data.technology}
                        handleChange={handleChange}
                        options={options.technology}
                        name="technology"
                        multiple
                    />
                    <Dropdown
                        label="Salary"
                        id="job-salary-label"
                        value={data.salary}
                        handleChange={handleChange}
                        options={options.salary}
                        name="salary"
                    />
                    <Button onClick={()=>saveJob()} variant="contained">Save Job</Button>
                </FormWrapper>
           </Component>
        </>
    )
}

export default CreatePost;