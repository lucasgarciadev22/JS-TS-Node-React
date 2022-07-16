import React from "react";
import useGitHub from "../../hooks/github-hooks";
import StatusCount from "../statusCount";
import * as S from "./styled";

const Profile = () => {
  //call hooks
  const { gitHubState } = useGitHub();

//creating structures...
  return (
    <S.Wrapper>
      <S.WrapperImage src={gitHubState.user.avatar} alt="User's avatar" />
      <S.WrapperInfoUser>
        <div>
          <h1>{gitHubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={gitHubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {gitHubState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{gitHubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{gitHubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={gitHubState.user.blog} target="_blank" rel="noreferrer">
              {gitHubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        {/* importing status count component */}
        <StatusCount/>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
