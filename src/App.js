import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Spin } from "antd";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

// Should be set in env
const profileAPI = "https://jsonplaceholder.typicode.com/users";
const avatarAPI =
  "https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy";

const StyledProfileGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background: var(--white);
  justify-items: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(profileAPI)
      .then((response) => response.json())
      .then((data) => {
        const profilesWithAvatars = data.map((profile) => {
          const avatar = avatarAPI.replace(
            "%7B%7Busername%7D%7D",
            profile.username
          );
          return { ...profile, avatar };
        });
        setProfiles(profilesWithAvatars);
      });
  }, []);

  if (!profiles.length) {
    return (
      <LoaderContainer>
        <Spin size="large" />
      </LoaderContainer>
    );
  }

  return (
    <StyledProfileGrid>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </StyledProfileGrid>
  );
}

export default App;
