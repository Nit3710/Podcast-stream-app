import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PodcastCard from '../components/PodcastCard'
const DashboardMain = styled.div`
padding:20px 30px;
height:100%;
overflow-y:scroll;
display:flex;
flex-direction:column;
gap:20px;
@media (max-width:768px){
padding:6px 10px;
}
`
const FilterContainer = styled.div`
display:flex;
flex-direction:column;
padding:20px 30px;
background-color:${({ theme }) => theme.bg};
border-radius:6px;
`
const Topic = styled.div`
color:${({ theme }) => theme.text_primary};
font-size:16px;
font-weight:500;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:768px){
font-size:14px;
}
`
const Span = styled.div`
display:flex;
color:${({ theme }) => theme.primary};
`
const Podcasts = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:14px;
padding:18px 6px;
@media(max-width:550px){
justify-content:center;
}
`
const Dashboard = () => {
    return (
        <DashboardMain>
            <FilterContainer>
                <Topic>Most Popular
                    <Link to="/showpodcasts/mostpopular" style={{ textDecoration: "none" }}><Span>Show All</Span></Link>
                </Topic>
            </FilterContainer>
            <Podcasts>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
            </Podcasts>
            <FilterContainer>
                <Topic>Comedy
                    <Link to="/showpodcasts/comedy" style={{ textDecoration: "none" }}><Span>Show All</Span></Link>
                </Topic>
            </FilterContainer>
            <Podcasts>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
            </Podcasts>

    
    
        </DashboardMain>
    )
}

export default Dashboard
