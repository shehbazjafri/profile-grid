import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Meta } = Card;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledAvatarContainer = styled.div`
  background: var(--ghostwhite);
`;

function ProfileCard({ profile }) {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <StyledAvatarContainer>
          <img alt="avatar" src={profile.avatar} />
        </StyledAvatarContainer>
      }
      actions={[
        <HeartOutlined
          key="like"
          style={{
            color: "var(--red)",
          }}
        />,
        <EditOutlined key="edit" />,
        <DeleteFilled key="delete" />,
      ]}
    >
      <Meta
        title={profile.name}
        description={
          <StyledList>
            <li>
              <MailOutlined style={{ marginRight: "10px" }} />
              {profile.email}
            </li>
            <li>
              <PhoneOutlined style={{ marginRight: "10px" }} />
              {profile.phone}
            </li>
            <li>
              <GlobalOutlined style={{ marginRight: "10px" }} />
              {profile.website}
            </li>
          </StyledList>
        }
      />
    </Card>
  );
}

export default ProfileCard;
